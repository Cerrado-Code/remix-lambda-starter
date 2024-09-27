import { createCookie, createCookieSessionStorage } from '@remix-run/node'
import config from './config.server'

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'auth.sessionId', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [config.get('auth.cookie.secret')], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
})

export const oauthStorage = createCookieSessionStorage({
  cookie: {
    name: 'oauth', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [config.get('auth.cookie.secret')], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
})

export const challengeStorage = createCookieSessionStorage({
  cookie: {
    name: 'challenge', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [config.get('auth.cookie.secret')], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
})

export const rememberMeCookie = createCookie('auth.rememberId', {
  sameSite: 'lax', // this helps with CSRF
  path: '/', // remember to add this so the cookie will work in all routes
  httpOnly: true, // for security reasons, make this cookie http only
  secrets: [config.get('auth.cookie.secret')], // replace this with an actual secret
  secure: process.env.NODE_ENV === 'production', // enable this in prod only
})

export const { getSession, commitSession, destroySession } = sessionStorage
