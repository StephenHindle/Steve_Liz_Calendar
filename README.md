# My Calendar: setup and sharing guide

A private, self-contained calendar that runs in the browser. All data is stored on each device, so there is no account, no server, and nothing to pay for. This guide covers getting it online, installing it as an app, updating it, using the wall display, and sharing it with other people.

## What is in the folder

Keep all of these files together in the same place. They work as a set.

- `index.html` (the app itself)
- `manifest.webmanifest` (lets the app install to a home screen)
- `sw.js` (the service worker that makes it work offline)
- `icon-192.png`, `icon-512.png`, `icon-180.png` (the app icons)

If your repository still has an old `calendar.html`, you can delete it. The app now lives in `index.html`.

## Quick start: put it online with GitHub Pages

Hosting it on GitHub Pages is free and gives you a web address you can open on any device. It also unlocks the features that need a secure connection, such as weather, location, install to home screen, and offline use.

1. Sign in at github.com (create a free account if you do not have one).
2. Click the plus icon at the top right, then **New repository**. Give it a name such as `calendar`, choose **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file** (or **Add file** then **Upload files**).
4. Drag in all six files listed above, then click **Commit changes**.
5. Go to **Settings** (top of the repository), then **Pages** in the left menu.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Set the branch to **main** and the folder to **/ (root)**, then click **Save**.
7. Wait a minute, then refresh the Pages screen. It will show your address, which looks like `https://YOURNAME.github.io/calendar/`.

That address is your calendar. Bookmark it.

The first time you open it, the browser may ask to use your location (for weather) and, once you turn reminders on in Settings, to show notifications. Allow both if you want those features.

## Install it as an app on your devices

Once it is online, each person can add it to their device so it opens full screen like a normal app and works offline.

- **iPhone or iPad (Safari):** open the link, tap the Share button, then **Add to Home Screen**. On iPhone this step is also what makes reminders work.
- **Android (Chrome):** open the link, tap the three-dot menu, then **Install app** or **Add to Home screen**.
- **Windows or Mac (Chrome or Edge):** open the link and click the small install icon in the address bar, or use the browser menu and choose **Install**.

## Handy features

- **Search:** tap Search in the left rail, or press `/` (or Ctrl+K) on a keyboard. It finds tasks (including words in their notes), list items and saved meals, and jumps straight to the match.
- **Undo:** after adding, editing, moving or deleting something, tap **Undo** on the message at the bottom of the screen. On a keyboard, Ctrl+Z (Cmd+Z on a Mac) works too.
- **Outdoor tasks:** switch on **Outdoors** in a task, and it will show a warning if rain, storms, heat (35° and above) or strong wind are forecast. The forecast reaches about two weeks ahead.
- **Animated background:** choose a moving wallpaper in Settings under Appearance. **Weather sky** follows the time of day (dawn, day, dusk and night, using real sunrise and sunset times) and the current weather (drifting cloud, rain, storm flashes, fog, snow, stars on clear nights). **Colour flow** has soft colours drifting slowly in shades of your accent colour. **Aurora** has ribbons of light rippling across the screen. Choose **Off** to save battery. Devices set to reduce motion get a still version.
- **Glass tiles:** events have a frosted glass look, so the wallpaper glows softly through them while the text stays easy to read. Devices set to reduce transparency get solid tiles instead.
- **SA public holidays and school terms:** holidays are marked on the calendar, school holidays are shaded, and the header shows the current term and week. Both can be turned off in Settings under Holidays.

## Widget panels and the bottom bar

The main buttons (Add, Search, Lists, Meals, Fullscreen and Settings) sit in a bar along the bottom. There is a widget panel on each side of the calendar, with a **Widgets** button at each end of the bottom bar to show or hide it. On wide screens both panels sit beside the calendar. On a laptop or iPad in landscape the right panel stays open and the left one slides in, and on phones and smaller tablets both slide in from the edge and close when you tap outside them.

In Settings under Widgets you can switch each widget on or off and choose whether it sits in the left or right panel. Under Appearance, **Smooth mode** uses lighter glass effects and a calmer background so tablets stay quick. It is on automatically for iPads.

- **Ask AI:** talk to Claude. Say "Hey Claude" followed by your question, tap the orange microphone, or type in the box. Claude answers out loud and in writing, and knows today's date, the weather and (if you allow it) the next week of your calendar, so you can ask things like "Hey Claude, what's on tomorrow?". It can read the calendar but not change it. See **Setting up Ask AI** below.
- **YouTube:** search for videos, or paste any YouTube link (a video, a playlist or a live stream). Tap a result to play it in the widget. The expand button opens it in a large window over the calendar, and the shrink button or Escape puts it back. Playing a video stops the radio, and starting the radio pauses the video. Recently played videos are listed for quick replay. Searching needs a free key, see **Setting up YouTube search** below.
- **Mini calendar:** a small month with coloured dots on busy days and public holidays in red. Tap a day to jump to it, or use the arrows to look ahead.
- **Radio:** four station tiles: GOLD 1323, FIVEaa, KIIS 1023 (formerly Mix 102.3) and Smooth FM Adelaide. Tap a tile to listen live, tap it again to stop, or tap another station to switch. A volume slider appears while something is playing, and a red dot on the Widgets button shows the radio is on even when the panel is hidden. On phones and tablets the lock screen shows the station with a pause button. These are the stations' own internet streams, so they need an internet connection, and a phone or tablet may stop the sound if the app is closed.
- **Bin day:** tap the pencil, pick your collection day and which second bin goes out next time (recycling or green organics). It then shows which bins to put out and when, following the usual Adelaide pattern: general waste every week, recycling and green organics on alternate weeks.
- **Photo frame:** add photos and they fade from one to the next every 12 seconds. Tap the photo to skip ahead, or tap the three dots to add or remove photos. Up to 40 photos are kept, resized to save space.

Photos are stored on each device, like the rest of your calendar, and are not included in **Back up to file**, so keep the originals.

## Setting up Ask AI

Ask AI uses Anthropic's API rather than your claude.ai subscription, because a website cannot sign in to a Claude account. The API is pay as you go, usually around a cent or two per question with the fast model.

1. Go to console.anthropic.com and sign in (you can use the same email as your Claude account).
2. Add a little credit under **Billing** (the minimum top up is enough for a very long time).
3. Open **API keys**, click **Create key**, give it a name such as `Calendar`, and copy the key (it starts with `sk-ant-`).
4. In the calendar, open **Settings**, go to **Ask AI and YouTube**, and paste the key.

The key is saved only on that device and is not included in backup files. Anyone who can use that device can use the key, so keep that in mind on a shared tablet. You can also set a monthly spending limit in the Anthropic console.

**Voice and "Hey Claude":** the wake word works best in Chrome or Edge on a computer or Android tablet. The browser asks to use the microphone the first time. The microphone stays on while the app is open and the setting is on, and the browser's own speech service turns what you say into text. On an iPad, Safari stops listening from time to time, so you may need to tap the microphone. Spoken replies work everywhere. Switch the wake word, spoken replies or calendar sharing off in Settings.

## Setting up YouTube search

Pasting YouTube links works without any setup. To search, you need a free YouTube key from the same Google Cloud project you used for Google Calendar.

1. In console.cloud.google.com, open **APIs & Services**, then **Library**, search for **YouTube Data API v3** and click **Enable**.
2. Open **APIs & Services**, then **Credentials**, click **Create credentials**, then **API key**, and copy it.
3. Click the new key to edit it. Under **Application restrictions** choose **Websites** and add `https://stephenhindle.github.io/*`. Under **API restrictions** choose **Restrict key** and tick **YouTube Data API v3**. Save.
4. In the calendar, paste the key into **Settings**, **Ask AI and YouTube**, **YouTube search key**.

The free allowance covers about 100 searches a day.

## Connect Google Calendar

Events from your Google calendars can appear alongside your own tasks. They stay in Google (nothing is copied), so any change you make in Google Calendar shows up here on the next refresh. Google events are read only in this app: tap one to see its details, then **Open in Google Calendar** to change it. You can connect as many Google accounts as you like, and each account can be set to belong to a person so the person filter works.

### One-time setup in Google Cloud (about 10 minutes, free)

1. Go to console.cloud.google.com and sign in. Create a new project (any name, such as `My Calendar`).
2. Open the menu, choose **APIs & Services**, then **Library**. Search for **Google Calendar API** and click **Enable**.
3. Open the menu, choose **Google Auth platform**. If asked, click **Get started** and fill in the app name and your email. Choose **External** for the audience.
4. Under **Audience**, leave it in **Testing** and add every Google account you want to connect (yours, Liz's and so on) as **Test users**.
5. Under **Clients**, click **Create client**. Choose **Web application**. Under **Authorized JavaScript origins**, add `https://stephenhindle.github.io` (just the address, no folder and no slash at the end). Click **Create**.
6. Copy the **Client ID** (it ends in `.apps.googleusercontent.com`).

### Connect in the app

1. Open the calendar from its GitHub Pages address (sign-in does not work from a file opened on your computer).
2. Go to **Settings**, then **Google Calendar**, and paste the Client ID.
3. Tap **Connect Google account**, pick the account, and allow access.
4. Untick any calendars you do not want to see, set a colour if you like, and choose who the account **Belongs to**.
5. To add someone else, tap **Add another Google account** and sign in with their account.

### Good to know

- Google sign-ins last about an hour. Events already loaded stay on screen, and when a fresh sign-in is needed a **Refresh Google** button appears at the top. Tap it to update.
- The app checks for changes every few minutes while it is open.
- Each device connects separately, since nothing is stored on a server.
- Reminders and outdoor weather warnings apply to the app's own tasks, not to Google events.
- To disconnect an account, tap **Remove** on its card in Settings.

## Using it as a wall display

For a tablet mounted on the wall or sitting on a bench:

1. Open **Settings** and switch on **Kiosk display**.
2. The app switches to the **Wall** view: a large clock, today's events as big cards (with Now and Next marked), and the coming week alongside, with the weather across the top.
3. Install it to the home screen and tap **Fullscreen** so nothing else is on screen.

The wall view keeps itself up to date: the clock ticks, finished events fade, and the weather refreshes every half hour. Tap any card to edit it, or a day in the coming week to open it. Switch Kiosk display off to go back to the normal views.

## Updating the app later

When you want to change the app, replace the files in the repository with the new versions and commit. Because the app caches itself to work offline, there is one extra step so people actually receive the update:

1. Open `sw.js` and change the version line near the top. It currently reads `var CACHE = "cal-cache-v14";`, so change it to `"cal-cache-v15"`, and so on each time.
2. Commit the changed files.

After that, the next time someone opens the app it will fetch the new version. If a device still shows the old one, close the app or tab fully and reopen it, or pull to refresh.

### Keeping holiday dates current

The public holiday list covers 2026 and 2027, and the school term list covers 2026 to 2030. When new years are published, add them near the top of the script in `index.html`, in the tables named `SA_HOLIDAYS` and `SA_TERMS`. The sources are the Fair Work Ombudsman public holiday pages and the SA Department for Education term dates page.

## Sharing it with other people

There are two different things people often mean by "sharing", so here is how each works.

### Sharing the app so others can use it

Just send people the link. Anyone can open it on their own phone, tablet, or computer, and install it if they like. There is nothing to sign up for.

Keep in mind how the data works, because it is different from calendars that live in the cloud:

- Each device and browser keeps its **own private calendar**. There is no login and no syncing between people. What you add on your phone does not appear on someone else's phone.
- If several people use the **same device and browser**, they all share the one calendar on it, since there are no separate accounts. For separate calendars on a shared computer, use different browsers or browser profiles, or different devices.

### Moving your own calendar between your devices

Because there is no automatic sync, you copy your data across yourself using the built-in backup:

1. On the device that has your calendar, open **Settings** and choose **Back up to file**. This downloads a small `.json` file.
2. Send that file to your other device (by email, a messaging app, or a cloud drive).
3. On the other device, open the app, go to **Settings**, and choose **Restore from file**, then pick the backup.

You can use the same steps to hand someone a ready-made starting calendar: send them your backup file and have them restore it. Note that restoring **replaces** whatever is currently on that device, so it suits a fresh setup rather than merging two calendars. If you restore by mistake, tap **Undo** straight away.

## Your privacy

Everything you enter stays on your own device in the browser's local storage. It is not uploaded anywhere and no one else can see it. The only outside connections the app makes are to fetch the weather and to turn your location into a place name, both from free services and only when you have weather turned on. If you connect Google Calendar, the app reads your events directly from Google with read-only access; they go straight from Google to your device and nowhere else. If you clear your browser data or use private browsing, the calendar on that device is wiped, so keep a backup file if the data matters to you.

## Troubleshooting

- **"Hey Claude" isn't responding.** Check that the wake word is on in Settings, that the microphone is allowed for the site, and that you are using Chrome or Edge. On an iPad, tap the microphone on the Ask AI widget.
- **Ask AI says the key wasn't accepted or the account is out of credit.** Check the key in Settings, and your credit at console.anthropic.com.
- **Weather is not showing.** Turn it on in Settings, then either allow location or type a town in the search box. It needs an internet connection. The last forecast stays on screen for a few hours if the connection drops.
- **Outdoor warnings are not appearing.** They need weather switched on, and they only show for dates within the forecast range (about two weeks).
- **Reminders are not appearing.** Turn on reminders in Settings and allow notifications. On iPhone you must add the app to the Home Screen first. The app or its tab also needs to be open for a reminder to fire.
- **I cannot find the Wall view.** It only appears when **Kiosk display** is switched on in Settings.
- **My changes to the app are not showing up.** Bump the version in `sw.js` as described in Updating, then close and reopen the app.
- **The page will not load properly, or install and offline do not work.** These features need the secure GitHub Pages address, not a file opened directly from your computer. Make sure you are opening the `https://...github.io/...` link.
- **Google sign-in shows an error about the origin or redirect.** Check the Authorized JavaScript origin is exactly `https://stephenhindle.github.io` and wait a few minutes after saving it.
- **Google says the app is not verified or access is blocked.** Add that Google account as a test user under Google Auth platform, Audience.
- **Google events stopped updating.** Tap **Refresh Google** at the top of the screen, or **Refresh now** in Settings.
- **My tasks disappeared.** The browser cleared its storage. Restore from your most recent backup file, and back up now and then to be safe.
