import { initialize } from '@bcwdev/auth0provider-client'
import { AppState } from '../AppState'
import { audience, clientId, domain } from '../AuthConfig'
import router from '../router'
import { setBearer } from './AxiosService'
import { accountService } from './AccountService'
import { socketService } from './SocketService'
import { profileService } from './ProfileService'

export const AuthService = initialize({
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async function () {
  setBearer(AuthService.bearer)
  AppState.user = AuthService.user
  await accountService.getAccount()
  // chatService.getChat() NOTE add in once service created
  socketService.authenticate(AuthService.bearer)

  await profileService.getAll()
  AppState.profiles.forEach((p, i) => {
    if (p.creatorId === AppState.account._id) {
      console.log('if statement')
      router.push({ name: 'Account' })
      return p
    } else if (i === AppState.profiles.length - 1) {
      console.log('else statement')
      router.push({ name: 'CreateProfile' })
    }
  })
  // NOTE if there is something you want to do once the user is authenticated, place that here
})
