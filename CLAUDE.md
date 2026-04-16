# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Static privacy policy page for **Mughamarat Alfi** (مغامرات ألفي), a children's Arabic-language educational iOS app (letters, numbers, colors; ages 3–8). App bundle ID: `com.dow.LetsLearn`, Apple ID: `6443474268`.

## Structure

- `alfy/privacy-policy.html` — single self-contained HTML+CSS page, bilingual (Arabic RTL first, then English LTR)
- `alfy/app-icon.png` — app icon referenced by the HTML

No build step, no dependencies, no server. Open the HTML file directly in a browser to preview.

## Planning approach

- في مرحلة التخطيط، اتّبع **Design Patterns** و **SOLID principles** و **Best Practices** المناسبة للمهمة.
- إذا كانت التعليمات غير واضحة أو ناقصة، **اسأل المستخدم** قبل المتابعة — لا تفترض أو تخمّن.

## Content notes

- The Arabic section uses `dir="rtl"` on `<html>` and `.en-section` overrides this to `direction: ltr; text-align: left` for the English half.
- Highlight boxes use `.highlight` (green accent) and `.highlight-blue` (blue accent); borders flip side between RTL and LTR sections.
- The "last updated" date in the `<p class="last-updated">` line must be kept in sync when policy content changes.
- All payments go through Apple; we never touch financial data — this must remain accurate.
