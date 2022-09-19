---
layout: default
author: irosyadi
title: LanguageTool Word How To
date: 2022-09-12 15:35:09
category: howto
tags: ["languagetool"]
draft: false
---

# LanguageTool Word How To

- [LanguageTool](https://languagetool.org/) : open source, self-hosted, integration with VSCode
    - [Language Tools Community](https://community.languagetool.org/)
    - Language tools local HTTP server, [help](https://dev.languagetool.org/http-server):
        - start with `java -cp languagetool-server.jar org.languagetool.server.HTTPServer --port 8081 --allow-origin "*"`
        - Test the server with [http://localhost:8081/v2/check?language=en-US&text=my+text](http://localhost:8081/v2/check?language=en-US&text=my+text)
        - In windows, run on `cmd` not `powershell`.
        
### Visual Studio Code LanguageTool
- [LanguageTool Wrapper for VSCode](https://marketplace.visualstudio.com/items?itemName=raymondcamden.languagetool), [Github Repo](https://github.com/cfjedimaster/vscode-languagetool)
- [LanguageTool for VSCode](https://marketplace.visualstudio.com/items?itemName=adamvoss.vscode-languagetool), deceased, continued with:
    - [LanguageTool Linter for VSCode](https://marketplace.visualstudio.com/items?itemName=davidlday.languagetool-linter) [Github Repo](https://github.com/davidlday/vscode-languagetool-linter)
- [Latex and LanguageTool for VSCode](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) [Github Repo](https://github.com/valentjn/vscode-ltex)

### LanguageTool MS Word
- [LanguageTool unofficial MS Word add-in](https://github.com/jaumeortola/languagetool-msword10-addin): be used with a local LanguageTool server

### LanguageTool Rule
* [Create a new LanguageTool rule](https://community.languagetool.org/ruleEditor2/)

### LanguageTools Server
- Obsidian `http://localhost:8081/v2/check?`
- MS Word `http://localhost:8081/v2`
- Chrome Extension `http://localhost:8081/v2/`
Test : `http://localhost:8081/v2/check?language=en-US&text=my+text`