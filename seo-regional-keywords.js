/**
 * ChoiceNew & Pyro Studio - Global Multi-Region SEO Keyword Matrix & Dynamic Meta Engine
 * Regional Coverage: North America (北美大区), Southeast Asia (东南亚大区 - ID, VI, TH), Europe (欧洲大区), East Asia (东亚与亚太大区), Latin America & Middle East
 * Target Base Domain: https://choicenew.github.io/
 */

(function (global) {
    'use strict';

    var REGIONAL_SEO_MATRIX = {
        // 北美大区 (North America - US, CA, MX)
        north_america: {
            region_name: "North America (北美大区)",
            locale_codes: ["en-US", "en-CA", "fr-CA", "es-MX"],
            apps: {
                veherego: {
                    title: "VehereGo - Android Status Bar Island & Live Activity Hub",
                    keywords: [
                        "Android Live Activity status bar capsule",
                        "Dynamic Island Android free app North America",
                        "Parcel tracking pickup code OCR Cainiao SF Express",
                        "Apple Wallet PKPass manager Android",
                        "USPS FedEx UPS package status bar alert",
                        "com.mypyro.veherego"
                    ]
                },
                pyromagma_academic: {
                    title: "PyroMagma Academic - AI Paper Reader & Full-Text RAG",
                    keywords: [
                        "ArXiv IEEE Nature PubMed AI paper reader",
                        "Edge AI paper summarizer PDF RAG Q&A",
                        "Zotero sync Android paper assistant",
                        "Bilingual paper translator North America",
                        "com.mypyro.pyromagma"
                    ]
                },
                pyromagma_reader: {
                    title: "PyroMagma AI Reader - Free Novel, Manga & Academic Reader (Legado Alternative)",
                    keywords: [
                        "Legado alternative free novel reader Android",
                        "On-device AI neural translation raw manga",
                        "Live speech bubble OCR manga translator",
                        "Free EPUB PDF ebook reader offline privacy"
                    ]
                },
                yourcallyourrule: {
                    title: "YourCallYourRule - Smart Call & SMS Blocker",
                    keywords: [
                        "STIR SHAKEN caller verification Android",
                        "Robocall blocker spam call filter US Canada",
                        "Regex phone number blacklist caller ID plugin",
                        "WebDAV cloud backup call blocker Android",
                        "com.yours.yourcallyourrule"
                    ]
                }
            }
        },

        // 东南亚大区 (Southeast Asia - ID, VI, TH, MY, PH, SG)
        southeast_asia: {
            region_name: "Southeast Asia (东南亚大区)",
            locale_codes: ["id-ID", "vi-VN", "th-TH", "en-SG", "ms-MY"],
            apps: {
                yourcallyourrule: {
                    keywords: [
                        "Blokir panggilan spam", "Blokir nomor telepon", "Penyaring panggilan", "Daftar hitam nomor",
                        "Chặn cuộc gọi rác", "Chặn số lạ", "Bộ lọc cuộc gọi",
                        "บล็อกเบอร์", "บล็อกเบอร์แปลก", "บล็อกสายโทรเข้า", "ตัวกรองการโทร",
                        "Spam call blocker", "Call blocker", "Truecaller alternative", "Whoscall alternative"
                    ]
                },
                veherego: {
                    keywords: [
                        "Aplikasi Ilha Dinâmica Android", "Lacak paket J&T Shopee Tokopedia OCR",
                        "Ứng dụng đọc mã bưu kiện OCR", "ตัวติดตามพัสดุและรหัสรับสินค้า"
                    ]
                }
            }
        },

        // 欧洲大区 (Europe - UK, DE, FR, ES, IT, RU)
        europe: {
            region_name: "Europe (欧洲大区)",
            locale_codes: ["en-GB", "de-DE", "fr-FR", "es-ES", "it-IT", "ru-RU"],
            apps: {
                veherego: {
                    keywords: [
                        "Dynamic Island Live Status Leiste Android",
                        "Anruf und Paket Live Activity Kapsel",
                        "PKPass Wallet App Android Deutschland France",
                        "Bloqueur de notifications capsule status bar"
                    ]
                },
                pyromagma_academic: {
                    keywords: [
                        "KI Wissenschafts Reader Arbeiten Zusammenfassungen",
                        "Zotero Synchronisation Android Europa",
                        "Lecteur d'articles scientifiques IA RAG",
                        "Lector de artículos académicos IA"
                    ]
                },
                yourcallyourrule: {
                    keywords: [
                        "Spamschutz Anrufe SMS Sperre Android",
                        "Bloqueador de llamadas spam Werbeanrufe blockieren",
                        "Filtre d'appels indésirables France España",
                        "DSGVO konformer Anrufblocker ohne Tracking"
                    ]
                }
            }
        },

        // 东亚与亚太大区 (East Asia - CN, TW, HK, JP, KR)
        east_asia: {
            region_name: "East Asia (东亚与亚太大区)",
            locale_codes: ["zh-CN", "zh-TW", "ja-JP", "ko-KR"],
            apps: {
                veherego: {
                    keywords: [
                        "安卓灵动岛", "状态栏胶囊", "实时动态岛", "取件码自动提取",
                        "菜鸟驿站取件码小组件", "顺丰速运物流卡片", "丰巢菜鸟美团OCR",
                        "リライブ島", "ライブアクティビティ", "荷物受取コード", "PKPass wallet"
                    ]
                },
                pyromagma_academic: {
                    keywords: [
                        "AI论文阅读器", "论文RAG问答", "Zotero文献同步", "论文拆解提炼",
                        "ArXiv论文AI速读", "学术文献双语翻译", "論文AI要約", "学術論文リーダ"
                    ]
                },
                pyromagma_reader: {
                    keywords: [
                        "Legado", "Legado阅读", "开源阅读 Legado", "Legado 替代品",
                        "本地大模型翻译小说", "生肉漫画 AI 实时 OCR 翻译", "日漫美漫 AI 本地汉化",
                        "免费看小说看漫画", "全网小说无广告"
                    ]
                },
                yourcallyourrule: {
                    keywords: [
                        "骚扰电话拦截", "短信拦截防火墙", "正则表达式拦截", "电话黑名单",
                        "来电归属地抓取插件", "迷惑電話着信拒び", "迷惑SMSフィルター", "com.yours.yourcallyourrule"
                    ]
                }
            }
        }
    };

    function initRegionalSeoEngine() {
        if (typeof document === 'undefined') return;

        var userLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        var selectedRegion = REGIONAL_SEO_MATRIX.north_america;

        if (userLang.indexOf('id') !== -1 || userLang.indexOf('vi') !== -1 || userLang.indexOf('th') !== -1) {
            selectedRegion = REGIONAL_SEO_MATRIX.southeast_asia;
        } else if (userLang.indexOf('zh') !== -1 || userLang.indexOf('ja') !== -1 || userLang.indexOf('ko') !== -1) {
            selectedRegion = REGIONAL_SEO_MATRIX.east_asia;
        } else if (userLang.indexOf('de') !== -1 || userLang.indexOf('fr') !== -1 || userLang.indexOf('ru') !== -1 || userLang.indexOf('es') !== -1) {
            selectedRegion = REGIONAL_SEO_MATRIX.europe;
        }

        global.CHOICENEW_REGIONAL_SEO = {
            baseDomain: "https://choicenew.github.io/",
            activeRegion: selectedRegion.region_name,
            matrix: REGIONAL_SEO_MATRIX
        };
    }

    initRegionalSeoEngine();
})(typeof window !== 'undefined' ? window : this);
