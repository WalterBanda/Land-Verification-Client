import initAuth from '@core/config/initAuth'
import { setAuthCookies } from 'next-firebase-auth'

initAuth()

const handler = async (req, res) => {
    try {
        await setAuthCookies(req, res)
    } catch (e) {
        return res.status(500).json({error: 'Unexpected error.'})
    }
    return res.status(200).json({success: true})
}

export default handler
