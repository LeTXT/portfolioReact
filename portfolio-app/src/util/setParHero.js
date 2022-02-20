import { iAmDev } from '../array/iAmDev'

export const setParHero = (set, state) => {
    setTimeout(() => {
        if(state === iAmDev.length -1) {
            set(0)
            return state
        } else {
            set(state + 1)
            return state
        }
        
    }, 3000)
    
}

export default { setParHero }