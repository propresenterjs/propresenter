import updateNotifier from "update-notifier"
import packageJson from "../package.json"

updateNotifier({ pkg: packageJson }).notify()

export { version } from "../package.json"

export { default as Collection } from "./util/Collection"
export { default as RequestHandler } from "./util/RequestHandler"
export { default as StreamHandler } from "./util/StreamHandler"

export { default as Client } from "./client/Client"
export { default as Macros } from "./modules/Macros"
export { default as Props } from "./modules/Props"
export { default as Messages } from "./modules/Messages"
export { default as Timers } from "./modules/Timers"
export { default as Announcements } from "./modules/Announcements"
export { default as Audio } from "./modules/Audio"
export { default as Capture } from "./modules/Capture"
export { default as Slides } from "./modules/Slides"

/*
Hi, welcome to looking in my code.
Any questions? Shoot me a message on Discord: https://inv.wtf/shadow
or just shoot me
that too
*/
