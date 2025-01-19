const response = await fetch(`https://${Game.world_id}.grepolis.com/game/frontend_bridge?town_id=${Game.townId}&action=execute&h=${Game.csrfToken}&json=%7B%22model_url%22%3A%22PremiumExchange%22%2C%22action_name%22%3A%22read%22%2C%22town_id%22%3A${Game.townId}%2C%22nl_init%22%3Atrue%7D&_=${Date.now()}`, {
  "headers": {
    "accept": "text/plain, */*; q=0.01",
    "accept-language": "de-DE,de;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Brave\";v=\"132\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": `https://${Game.world_id}.grepolis.com/game/index`,
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
console.log(await response.json())
