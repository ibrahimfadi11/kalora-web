# kalora.dk

Hjemmesiden for Kalora, den danske kalorietæller.

- `index.html`: forside med kalorieberegner
- `privatliv/`: privatlivspolitik (linkes fra App Store)
- `support/`: hjælp og kontakt (linkes fra App Store)

Siden er ren HTML og CSS uden byggetrin og ligger på GitHub Pages med domænet kalora.dk (se `CNAME`).

## Ved lancering i App Store

1. Skift TestFlight-linket ud med App Store-linket på alle sider:
   `grep -rl "testflight.apple.com/join/fdUu19ya" --include=*.html . | xargs sed -i "s#https://testflight.apple.com/join/fdUu19ya#APP_STORE_LINK#g"`
2. Tilføj `<meta name="apple-itunes-app" content="app-id=APP_ID">` i `<head>` på alle sider (Safari-banner).
3. Ret teksten "Kalora er i test og kommer snart i App Store" på forsiden.
