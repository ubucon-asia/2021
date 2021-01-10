[![Deploy Website](https://github.com/ubucon-asia/2021/workflows/Deploy%20Website/badge.svg)](https://github.com/ubucon-asia/2021/actions?query=workflow%3A%22Deploy+Website%22)
# 2021
Ubucon Asia 2021 Website
Built with [Hugo](https://gohugo.io) and [Vanilla framework](https://vanillaframework.io/)

# How to localize

1. Add language info in `config.yml` under `languages:` section. And fill out translation for site title, description and navigation menu. 
After adding language in `config.yml` you will be able to see your new language in language chooser menu.

```yml
languages:
  ko: # Language code
    languageName: 한국어 # Language name
    title: 우부콘 아시아 2021 # Site title
    weight: 2
    params:
      description: >-
        아시아에 있는 다양한 우분투 지역 커뮤니티에서 준비한 첫 우분투 아시아 컨퍼런스. # Site description
      period: 2021년 3~4분기 중 개최 예정. # description for event period
    menu:
      main: # site navigation fields
        - identifier: about
          name: 소개 # Make sure to translate only "name" field
          url: about
          weight: 1
        - identifier: sessions
          name: 세션
          url: sessions
          weight: 2
        - identifier: sponsors
          name: 후원사
          url: sponsors
          weight: 3
        - identifier: news
          name: 소식
          url: news
          weight: 4
        - identifier: wiki
          name: 위키
          url: https://wiki.ubuntu.com/UbuconAsia/2021
          weight: 5
```

2. UI localization  
You can see UI locale files in `i18n` directory. make a copy of `en.toml` And translate strings wraped with quotation marks. Below is an example.

```toml
[learn_more]
other = "Learn more"
```
```toml
[learn_more]
other = "더 알아보기"
```

3. Markdown content localization

Most markdown files are name `index.md` or `_index.md`. To translate, Make a copy of markdown file on same path. with the filename `index.<lang-code>.md` or `_index.<lang-code>.md` (e.g. `index.ko.md` or `_index.ko.md`). Then, translate the copied file.

Ubucon Asia 2021 website uses hugo's i18n feature to support localization. To learn more, please refer to ["Multilingual Mode"](https://gohugo.io/content-management/multilingual/)

# License
Code: MIT, Contents: CC BY 4.0
