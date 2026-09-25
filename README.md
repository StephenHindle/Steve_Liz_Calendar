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
- **SA public holidays and school terms:** holidays are marked on the calendar, school holidays are shaded, and the header shows the current term and week. Both can be turned off in Settings under Holidays.

## Using it as a wall display

For a tablet mounted on the wall or sitting on a bench:

1. Open **Settings** and switch on **Kiosk display**.
2. The app switches to the **Wall** view: a large clock, today's events as big cards (with Now and Next marked), and the coming week alongside, with the weather across the top.
3. Install it to the home screen and tap **Fullscreen** so nothing else is on screen.

The wall view keeps itself up to date: the clock ticks, finished events fade, and the weather refreshes every half hour. Tap any card to edit it, or a day in the coming week to open it. Switch Kiosk display off to go back to the normal views.

## Updating the app later

When you want to change the app, replace the files in the repository with the new versions and commit. Because the app caches itself to work offline, there is one extra step so people actually receive the update:

1. Open `sw.js` and change the version line near the top. It currently reads `var CACHE = "cal-cache-v5";`, so change it to `"cal-cache-v6"`, and so on each time.
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

Everything you enter stays on your own device in the browser's local storage. It is not uploaded anywhere and no one else can see it. The only outside connections the app makes are to fetch the weather and to turn your location into a place name, both from free services and only when you have weather turned on. If you clear your browser data or use private browsing, the calendar on that device is wiped, so keep a backup file if the data matters to you.

## Troubleshooting

- **Weather is not showing.** Turn it on in Settings, then either allow location or type a town in the search box. It needs an internet connection. The last forecast stays on screen for a few hours if the connection drops.
- **Outdoor warnings are not appearing.** They need weather switched on, and they only show for dates within the forecast range (about two weeks).
- **Reminders are not appearing.** Turn on reminders in Settings and allow notifications. On iPhone you must add the app to the Home Screen first. The app or its tab also needs to be open for a reminder to fire.
- **I cannot find the Wall view.** It only appears when **Kiosk display** is switched on in Settings.
- **My changes to the app are not showing up.** Bump the version in `sw.js` as described in Updating, then close and reopen the app.
- **The page will not load properly, or install and offline do not work.** These features need the secure GitHub Pages address, not a file opened directly from your computer. Make sure you are opening the `https://...github.io/...` link.
- **My tasks disappeared.** The browser cleared its storage. Restore from your most recent backup file, and back up now and then to be safe.
