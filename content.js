let pageHeaderActions = document.querySelector(".pagehead-actions")
const actionLinkClasses = ["btn", "btn-sm", "btn-danger"]
const githubUsernames =['aaronbassett','svaksha', 'circuitrcay', 'pikhq', 'kinduff', 'lynxis', 'amatas', 'alis0nc', 'sapphiclinguine', 'fasterthanlime', '00p513', 'amyosx', 'rhiaro', 'queer', 'fraxinas', 'antifuchs', 'monotek', 'tonejito', 'AndrewDaGuy', 'athorp96', 'cbeuw', 'binford2k', 'xistence', 'betaveros', 'daethnir', 'demophoon', 'squiter', 'tucane47', 'caarlos0', 'Chaspen', 'chutten', 'jaller94', 'shibumi', 'CAD97', 'kode54', 'Techokami', 'tweedge', 'dashaun', 'sdomi', 'infdev', 'lizdenys', 'barzamin', 'er1n', 'rustodon', 'MagicFab', 'fantoro', 'galenguyer', 'lanodan', 'harsh183', 'HightechSec', 'modwizcode', 'heftig', 'jeetelongname', 'jkim', 'acidflask', 'jiahao', 'cyber-gene', 'aoei', 'jlk', 'ShadowJonathan', 'jibby', 'joelazar', 'jjo', 'kspalaiologos', 'jukefr', 'combacsa', 'NeLaurynas', 'LunarLambda', 'sexualrhinoceros', 'makyo', 'm4schini', 'Keruspe', 'SwooshyCueb', 'kmi', 'mattcen', 'mattmattox', 'gasman', 'smurf', 'morre', 'arareko', 'FSMaxB', 'nektro', 'galgalesh', 'lethargilistic', 'mythmon', 'NCommander', 'nolski', 'ovyerus', 'indrora', 'natanbc', 'd0nut', 'AtomicNicos', 'nomeacuerdo', 'coolreader18', 'HerrSpace', 'penserbjorne', 'pmatos', 'Adrixan', 'pbnj', 'Peetz0r', 'pkgw', 'stripedpajamas', 'ptomato', 'philpem', 'andlabs', 'plaes', 'theonesean', 'coolshaurya', 'fd', 'radioSight', 'DrMcCoy', 'Batcastle', 'scy', 'macleodsawyerms', 'drannex42', 'Guerillero', 'Uumas', 'apiology', 'locao', 'vinisalazar', 'rebtoor', 'Half-Shot', 'cr1901']

if (pageHeaderActions) {
  const username = window.location.pathname.split("/")[1]

  if (githubUsernames.includes(username)) {
    let listItem = document.createElement("li")
    let rmsLetterLink = document.createElement("a")
    rmsLetterLink.href = "https://rms-support-letter.github.io/"

    actionLinkClasses.forEach((className) =>
      rmsLetterLink.classList.add(className)
    )
    let linkText = document.createTextNode("RMS mob harasser")

    rmsLetterLink.appendChild(linkText)
    listItem.appendChild(rmsLetterLink)
    pageHeaderActions.insertBefore(listItem, pageHeaderActions.firstChild)
  }
}
