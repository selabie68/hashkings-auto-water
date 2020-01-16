# Hashkings Auto Water

This package will water your [hashkings.app](https://www.hashkings.app/) plots every 24 hours at 1 AM

## Installation

Clone the repository

```
git clone https://github.com/selabie68/hashkings-auto-water.git
cd hashkings-auto-water
```

Install node packages

`yarn` or `npm install`

Setup `.env` file

```
cp .env.example .env
```

Edit `.env` to match your needs

```
STEEM_ACCOUNT=[STEEM_NAME]
STEEM_POSTING_KEY=[PRIVATE_POSTING_KEY]
HASHKINGS_PLOTS=[COMMA_SEPARATED_PLOTS] (i.e. a53,e36)
```

Run the package
```
node index.js
```
or use pm2 to run in the background

```
pm2 start index.js --name hashkings-auto-water
```

## Donate

If this package helped you, please consider a small donation.

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg?logo=paypal&longCache=true&style=for-the-badge)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=87JQKAAW9PZ42) [![Become a Patron](https://img.shields.io/badge/Donate-Patreon-f96854.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4gUGBhApdi42CgAAAexJREFUWMPtmD2L1FAUQM/NjmCxoqyLuiK7jmAtiFharPgLxNJCrCzsra2sbK0EKxH/geAH2AgiCIOdI6wMgo04FjK4OntsMhLBWedlkofCHAhJk5eT+959uTcByJ8ZA6vAkATU48AmcAE4DawDe4FtYAC8Bh4DTyKiX95DREwfc8rxAzgwg9Dk3FWfm0ZP7f71GfMIlnL3nY9najF52aYjuGUzDNXD6m9zXVADFXVZHQIbNMN+oA8cqUayqCMHBNArB22SZaBXTZhkwfLm20CXdlhVn/7K7tRtRl0H3tMuAhsRMaizBu/RPgE8mlzMFMHJZqpuA3vIw8kiZe2plzLKAZxLneJr5GUzVfBMZsFTMwuqHWAps+BakZhZuemkCI53yfi2+JKSxTvA58yC/dQkeZBZ8EXSp05dAT5lFDxf50uy1WCJ1VySlHIAdzLJXY+IcXI1U0ZzABxrUW4EHARGRc0BLrYcvbMRMYqIeiV/RLwELrckdzMi3lTL/uSmqdJq3rBZbjXW1VUkr6jf5hQbq1er4zbSdpbdHWpHfVU+KIUd9a261GrjXpFdUe/OKPdQPVSZiakVSqP/Ziql2QlgDTgK7AO+Ah+Aj8C7iPie0kHNHcGEnjqJgozs9gfrnxCsw0JwIbgQ/N8FfwIXG7iJvkkzNgAAAABJRU5ErkJggg==&longCache=true&style=for-the-badge)](https://www.patreon.com/selabie68/overview) [![Donate STEEM](https://img.shields.io/badge/Donate-STEEM-669fd2.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG80lEQVRogbWZfWxddRnHP8/vvnSbLp2dlKVr7zY2HCprF8WYoXFEkRBk0Whv1zEHfWFd19ZGgy/4EtNEyQiYkMja7m5lxSph7R0TCSq+LG6LwaCgVuwURTfaTmFDINACa+85j3/0ZX35/X6n0O77332+5/s833PO/T2/lyMsIOoyT+aTTGTyEkvq7v385a8uZO6piC9UoobOvhU5gl8Aay+mYQCzEElqO/rW5QgeB0qBfy1ETh/m/aTrO3qvDGPBr4FLAQT577xdRWBeT7qhs29FGJOfMm4YANXX52sqChbTKql0++2pm9re5ROme3piOQ2OAKlphPC2TRen21cWl7d9Ieq6GaZVUuX7MoreYZKL3/AJlw2vb0LYNDOuIl6dC0XpTErQ48boh6OuvWC6pcWUpPcdVNGdwOnT91e/6RLVdvQVCPIdK6l435ANqc+1XWYITgBrFfPMnE2nThZmQKvGf77sE8VjQRWw1M5q8Ry9ArA63bpCjRwXWAWg6q8N46aLy9u3q3LrRFDQEZ8ohOs99BXpnp7Y3CyrBNA19UZNRG0Ac0m69Z0i+v1pqZCcTyTCez10fv7w+qsj/QLF6fZtIJ+cVlv8tQHMYqgFCqaZgkKvSv2t0iifjio8Xudrs2IaURswIWbLbE+s+WBdJuHRDfjdyK11mSfzfZes+ezeVYzNoNNra3i5NzdgBH2PJZ48+0r4cbcp/hCRN18SSW+/DQzr7LnNdRG5McByKxPqNpdI0IejEqvwxR1dve/wlC6wx7U4lW79qC+3AU45nN00/gpn4aUlzxxD5EVfYmD54pzUuUhVY68LKPJNX2KDcNLBJXIxM2ugAGQrKgLV8Ce+xAAIt6V7+pI2Km/RyD8AV6e4vmRr64dcaQ1h+ICnbE1J5b1FVkblhx7dBFYuGw5usRHPPtD8KvCoS6ihfNvFmQEpfBRk0MHnkYt9yUYcqCk9jvI3n2MAEb7qnGxE9jl18KmSre1XWk2TrQhEwvs8RXet/sw9y2ycimYiPIOyrmBofYWNGuip/yWuMQUigVr/ngYgyAUdQGCvydIgkWy0cfGkdAHDkb5Fbnf4UlEOuHVU2pqBAThzpHkQIesUI82rqzoXzYy3by99GVXnK56C0p0Hn77RRgRBuB8YcujiQdzcZjUNgMgdgNqUAoXB0Os11qwS/x7gXMZeyKHfsMXP/LjpfyjOG1eltmhb5t1W0wPdu/8KuNuYyJdJzx5QbdXvfx6hI8o0wqb6zqevsVHxRMJ340tio7lmq+mxvHzXU3ZNiZyzDqh4KHcBkUvKEP26LX7qwZ0vgLpvXKTx0h13T86u00z3ZxueAh5zilWso7mtZsOAwA8iPANcV9/Ra21jQQzfjRckzy+ZnF1nLTGNqn0bNYayVPneT9iL6h7EOcNNIoyJte//51DjgAhdTqFKMy0tBiymnzvc+DhwzK01TbZ4x81lp4BDfssAbK/v6rWvmQP24Gi9wOqSvsIbwXHuIRr6/ttbitKZlI1QwjtxdKApyAsDGmxE/0MN/xblQbdUm8Bhuv9w01FwrpljhtxuG3GgamOfwiM+x2OQhqrOU7P6/hhl9nh01xal29Y7t02iutcjdq+1VT1FJ3FJgtcqbUR/tv6kwG9c6Y1KpdN0cjjoBs5ZlbDKtdbeX1P2BKquolNzOHc2oUirizOim52mn/1583nfpJGLmTKnIe8rnsQHdh3se5+NGNTlD7tWngobvbvqUEy3i1Nl1MVlqjf8SuApX+4xA7nNViJbESg85JDlvKbPdO/6C2DbVgVx0T/5tCFEL1stZ4ETMBIetcUVfh9x1CsK0m8pduR0tvF5nzIIk4fAf4IqKnkuLgzkOTuje+dwPj3rmEoRvTtKdbD2itdU+Jk3s+GMizPGzJpdBf48mG18LNK0wmXTfit3DXQ3Rp17jBVWfufPrcecpARrZ0TeVCM7IOJLQMnWzNrpR2RyYvDFs9+K8HrhajFPeNh/rjxd6tzYhsq080BFm8aXz37TEoaTQkWOjiwauoFjLZGLogmM5uQFF6dwZ0uLhM7amInaKir1g9nGyX2s90ORohOj+5FFQ6MVg9mvnJ+rYYBYLFjsoP4oI+fdRxDXtMRBrwICQar7D++edm3U162rEQ4NnD2746084SmY+b8EeCWMaXnHrqucfb5k+YqNECYErezPNhyeyUeZ7hro2X3PWOt7O9CNIFMDgaA3jy9jnQgNCSPhtf09TSdsvNiCC4Wdnb2/FeQjE15E5ZZMzYYfzTfvRTNdc9/fl8ZjIy+hxIFQofZAden9C5F7wb6Nz0RMRjePG35DlG37a0qjDyzniItmWoSPAedQ3ZKpKfP067eOi2Za0VBENu2vLl3wD/z/B6SfTES3K+bPAAAAAElFTkSuQmCC&longCache=true&style=for-the-badge)](https://steemit.com/@anarcist69) [![Donate with Bitcoin](https://img.shields.io/badge/Donate-Bitcoin-orange.svg?logo=bitcoin&longCache=true&style=for-the-badge)](bitcoin:17gqqZZnr57maB3Ze5UnosBo9mtU1RTrD5)

Bitcoin: 17gqqZZnr57maB3Ze5UnosBo9mtU1RTrD5

Bitcoin Cash: qpu8736yqqhkfd5gsyph6a0wy0e4r83ap50tdsknv2

ETH: 0x927ad35fDc46Dc727fccd1E10A0ebe70a57BAA7D
