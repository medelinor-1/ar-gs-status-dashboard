(function () {
               "use strict";


               const incidents = [
                 {
        		  title: "تحديث أساسي - ديسمبر 2026",
        		  product: "Ranking",
        		  kind: "core",
        		  start: "2026-11-24T07:03:00",
        		  end: "",
        		  scheduled: true,
                  scheduledFor: "خلال ديسمبر 2026",
        		  status: "مجدول",
        	   	  description: "أعلنت جوجل عن تحديثها الأساسي لشهر ديسمبر 2026, الذي يهدف إلى تحسين قدرة أنظمة البحث على فهم المحتوى وتقييم مدى ملاءمته وترتيبه, مع التركيز على المحتوى الذي يعالج الأسئلة الطويلة والمعقدة, وتحسين نتائج البحث للمستخدمين الذين فعلوا ميزات التخصيص, وسيشمل التحديث جميع المناطق الجغرافية واللغات التي يتوفر فيها بحث جوجل, وقد يؤدي إلى تغيرات في ترتيب المواقع وظهورها في نتائج البحث, سواء بالارتفاع أو الانخفاض, دون أن يعني ذلك بالضرورة وجود مخالفات أو عقوبات, ومن المقرر أن يبدأ طرحه خلال شهر ديسمبر 2026.",
        		  url: "https://status.search.google.com/incidents/AXrqxXXdtSjj3672ux7X",
        		  articleUrl: "/2026/11/google-dec-core-update.html"
        },
                 {
        		  title: "تحديث أساسي - نوفمبر 2026",
        		  product: "Ranking",
        		  kind: "core",
        		  start: "2026-11-10T10:07:00",
        		  end: "2026-11-24T06:03:00",
        		  maxDays: 15,
        		  status: "مكتمل",
        	   	  description: "أعلنت جوجل عن انتهاء إطلاق تحديث نوفمبر الأساسي بالكامل.",
        		  url: "https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc",
        		  articleUrl: "/2026/11/november-26-core-update.html"
        },
                 {
                   title: "تحديث محتوى غير المرغوب فيه - سبتمبر 2026",
                   product: "Ranking",
                   kind: "spam",
                   start: "2026-09-24T09:15:00",
                   end: "2026-10-08T01:00:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث مكافحة المحتوى المزعج لشهر سبتمبر 2026.",
                   url: "https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu",
                   articleUrl: "/2026/09/September-SPAM-update.html"
                 },
                 {
                   title: "تحديث محتوى غير المرغوب فيه - أغسطس 2026",
                   product: "Ranking",
                   kind: "spam",
                   start: "2026-08-18T09:28:00",
                   end: "2026-08-21T01:49:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث مكافحة المحتوى المزعج لشهر أغسطس 2026.",
                   url: "https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE",
                   articleUrl: "/2026/08/August-2026-spam-update.html"
                 },
                 {
                   title: "تحديث محتوى غير المرغوب فيه - يونيو 2026",
                   product: "Ranking",
                   kind: "spam",
                   start: "2026-06-24T09:03:00",
                   end: "2026-06-26T10:58:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث مكافحة المحتوى المزعج لشهر يونيو 2026.",
                   url: "https://status.search.google.com/incidents/YUX1peHev5a4fkxLDiUQ",
                   articleUrl: "/2026/06/June-26-Spam-Update.html"
                 },
                 {
                   title: "تحديث أساسي - مايو 2026",
                   product: "Ranking",
                   kind: "core",
                   start: "2026-05-21T08:43:00",
                   end: "2026-06-02T05:43:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث أساسي لشهر ماي 2026.",
                   url: "https://status.search.google.com/incidents/wdAXJk6LRRihEjpzEeWE",
                   articleUrl: "/2026/05/google-may-core-update.html"
                 },
                 {
                   title: "تحديث أساسي - مارس 2026",
                   product: "Ranking",
                   kind: "core",
                   start: "2026-03-27T02:14:00",
                   end: "2026-04-08T06:12:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث أساسي لشهر مارس 2026.",
                   url: "https://status.search.google.com/incidents/7eTbAa2jWdToLkraZj5y",
                   articleUrl: "/2026/03/march-core-update.html"
                 },
                 {
                   title: "تحديث محتوى غير مرغوب فيه - مارس 2026",
                   product: "Ranking",
                   kind: "spam",
                   start: "2026-03-24T12:18:00",
                   end: "2026-03-25T07:39:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث مكافحة المحتوى المزعج لشهر مارس 2026.",
                   url: "https://status.search.google.com/incidents/VbnSXAH4SmEcxPtx4YSD",
                   articleUrl: "/2026/03/March-spam-update.html"
                 },
                 {
                   title: "مشكلة في عرض نتائج البحث - فبراير 2026",
                   product: "Serving",
                   kind: "issue",
                   start: "2026-02-24T22:33:00",
                   end: "2026-02-24T22:34:00",
                   status: "تم الحل",
                   description: "أصلحت Google المشكلة المتعلقة بعرض نتائج البحث. لن تكون هناك أي تحديثات أخرى.",
                   url: "https://status.search.google.com/incidents/TZF4pLmbzFdoBPP6o3iv",
                   articleUrl: ""
                 },
                 {
                   title: "التحديث الأساسي لـ Discover - فبراير 2026",
                   product: "Ranking",
                   kind: "core",
                   start: "2026-02-05T09:03:00",
                   end: "2026-02-27T02:02:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث أساسي في Discover لشهر فبراير 2026",
                   url: "https://status.search.google.com/incidents/mYbNTqV1ytDc2fA8hUz4",
                   articleUrl: "/2026/02/February-Discover-Core-Update.html"
                 },
                 {
                   title: "التحديث الأساسي - ديسمبر 2025",
                   product: "Ranking",
                   kind: "core",
                   start: "2025-12-11T09:25:00",
                   end: "2025-12-29T11:00:00",
                   status: "مكتمل",
                   description: "أعلنت Google اكتمال طرح تحديث أساسي لشهر ديسمبر 2025",
                   url: "https://status.search.google.com/incidents/DsirqJ1gpPRgVQeccPRv",
                   articleUrl: "/2025/12/google-december-core-update.html"
                 },
                 {
                   title: "مشكلة في عرض نتائج البحث - أكتوبر 2025",
                   product: "Serving",
                   kind: "issue",
                   start: "2025-10-03T13:00:00",
                   end: "2025-10-06T13:40:00",
                   status: "تم الحل",
                   description: "تم إصلاح المشكلة المتعلقة بعرض نتائج البحث بشكل تلقائي. لن تكون هناك أي تحديثات أخرى.",
                   url: "https://status.search.google.com/incidents/pW6WN7Ymo49q7z8pKk9w",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أغسطس 2025 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2025-08-26T09:02:00",
                   end: "2025-09-21T23:14:00",
                   status: "مكتمل",
                   description: "انتهى بالكامل إطلاق تحديث أغسطس 25 للمحتوى غير المرغوب فيه في Google.",
                   url: "https://status.search.google.com/incidents/a7Aainy6E9rZsmfq82xt",
                   articleUrl: "/2025/08/google-august-spam-update.html"
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في Google - يونيو 2025",
                   product: "Indexing",
                   kind: "issue",
                   start: "2025-06-12T16:54:00",
                   end: "2025-06-12T22:15:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/rX6zGEp9vJJxxrY16g4A",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في عرض نتائج عدسة جوجل, اقتراحات, والبحث بالصوت - يونيو 2025",
                   product: "Serving",
                   kind: "issue",
                   start: "2025-06-12T11:00:00",
                   end: "2025-06-12T22:13:30",
                   status: "تم الحل",
                   description: "أصلحت Google المشكلة المتعلقة بعرض النتائح. لن تكون هناك أي تحديثات أخرى.",
                   url: "https://status.search.google.com/incidents/wNcefVMLpVGGoFLzgMEg",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث يونيو 2025 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2025-05-30T07:34:00",
                   end: "2025-06-17T01:18:00",
                   status: "مكتمل",
                   description: "انتهى بالكامل إطلاق تحديث يونيو 25 الأساسي Google.",
                   url: "https://status.search.google.com/incidents/riq1AuqETW46NfBCe5NT",
                   articleUrl: "/2025/06/June-2025-core-update.html"
                 },
                 {
                   title: "تحديث مارس 2025 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2025-03-13T09:23:00",
                   end: "2025-03-27T05:34:00",
                   status: "مكتمل",
                   description: "انتهى بالكامل إطلاق تحديث مارس 25 الأساسي Google.",
                   url: "https://status.search.google.com/incidents/zpmwuSwifjDjfrVdaZUx",
                   articleUrl: "/2025/03/Google-March-2025-core-update.html"
                 },
                 {
                   title: "تحديث ديسمبر 2024 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2024-12-19T09:01:00",
                   end: "2024-12-26T11:03:00",
                   status: "مكتمل",
                   description: "انتهى بالكامل إطلاق تحديث ديسمبر 2024 الأساسي Google.",
                   url: "https://status.search.google.com/incidents/UUq2WSouY7PhSm8zvtD1",
                   articleUrl: "/2024/12/Google-Dec-24-core-update.html"
                 },
                 {
                   title: "تحديث ديسمبر 2024 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2024-12-12T07:46:00",
                   end: "2024-12-18T11:00:00",
                   status: "مكتمل",
                   description: "انتهى بالكامل إطلاق تحديث ديسمبر 2024 للمحتوى غير المرغوب فيه في Google.",
                   url: "https://status.search.google.com/incidents/V9nDKuo6nWKh2ThBALgA",
                   articleUrl: "/2024/12/Google-December-SPAM-update.html"
                 },
                 {
                   title: "مشكلة في عرض نتائج عدسة جوجل - ديسمبر 2024",
                   product: "Serving",
                   kind: "issue",
                   start: "2024-12-12T05:38:00",
                   end: "2024-12-13T05:53:00",
                   status: "تم الحل",
                   description: "أصلحت جوجل مشكلة تتعلّقف بعرض نتائج عدسة Google",
                   url: "https://status.search.google.com/incidents/kdTQ3CitewEHCy5vuhTD",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في Google - ديسمبر 2024",
                   product: "Indexing",
                   kind: "issue",
                   start: "2024-12-09T13:30:00",
                   end: "2024-12-09T16:30:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/iGN9Cz8C64gm57ZXwxze",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث نوفمبر 2024 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2024-11-11T13:23:00",
                   end: "2024-12-05T10:31:00",
                   status: "مكتمل",
                   description: "انتهى بالكامل إطلاق تحديث نوفمبر 2024 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/G7rp11wqTaTGn6JjiPF3",
                   articleUrl: "/2024/11/November-2024-core-update.html"
                 },
                 {
                   title: "مشكلة في عرض نتائج بحث Google - سبتمبر 2024",
                   product: "Serving",
                   kind: "issue",
                   start: "2024-09-14T22:22:00",
                   end: "2024-09-15T01:09:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة عرض نتائج البحث في Google",
                   url: "https://status.search.google.com/incidents/8FqjYCvePmrsF9P5assw",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة على صعيد ترتيب النتائج",
                   product: "Ranking",
                   kind: "issue",
                   start: "2024-08-15T22:48:00",
                   end: "2024-08-20T05:10:00",
                   status: "مكتمل",
                   description: "تم حل مشكلة على صعيد ترتيب النتائج في بحث Google",
                   url: "https://status.search.google.com/incidents/42XCLGtpuCZkzqe4dc6S",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أغسطس 2024 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2024-08-15T07:58:00",
                   end: "2024-09-03T12:03:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أغسطس 2024 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/gVx6b2o78zke7GrMidGy",
                   articleUrl: "/2024/08/August-2024-core-update.html"
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى الجديد - يوليوز 2024",
                   product: "Indexing",
                   kind: "issue",
                   start: "2024-07-08T14:32:00",
                   end: "2024-07-08T16:21:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/mFyYTxqTvS3Gp9fD3JP2",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في Google - يونيو 2024",
                   product: "Indexing",
                   kind: "issue",
                   start: "2024-06-20T11:00:00",
                   end: "2024-06-20T21:03:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/Gjz5TP3aaDRmKsSWgWF4",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث يونيو 2024 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2024-06-20T08:13:00",
                   end: "2024-06-27T09:10:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث يونيو 2024 للمحتوى غير المرغوب فيه في Google.",
                   url: "https://status.search.google.com/incidents/QdUeCQx3LRVbzQ3E7FiD",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في عرض بعض الميزات في بحث Google - ماي 2024",
                   product: "Serving",
                   kind: "issue",
                   start: "2024-05-30T19:36:00",
                   end: "2024-05-31T08:27:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة عرض بعض ميزات البحث في Google",
                   url: "https://status.search.google.com/incidents/6xK73KdB1GVcQc2kRtEm",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث مارس 2024 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2024-03-05T09:03:00",
                   end: "2024-03-20T06:09:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث مارس 2024 للمحتوى غير المرغوب فيه في Google.",
                   url: "https://status.search.google.com/incidents/iXz2PJfodvyjaVUeqxZE",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث مارس 2024 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2024-03-05T09:02:00",
                   end: "2024-04-26T13:09:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث مارس 2024 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/1jW2F89qC2NxJBWGiKxE",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في Google - يناير 2024",
                   product: "Indexing",
                   kind: "issue",
                   start: "2024-01-31T15:16:00",
                   end: "2024-02-08T03:36:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/Jh8ty34prbHLqSRiWKqm",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في الصّفحة الرّئيسية لبحث Google على متصفح Firefox على أجهزة Android.",
                   product: "Serving",
                   kind: "issue",
                   start: "2024-01-08T07:33:00",
                   end: "2024-01-09T07:37:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة في الصّفحة الرّئيسية لبحث Google على متصفح Firefox على أجهزة Android.",
                   url: "https://status.search.google.com/incidents/hySMmncEDZ7Xpaf9i32C",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في Google - ديسمبر 2024",
                   product: "Indexing",
                   kind: "issue",
                   start: "2023-12-21T09:02:00",
                   end: "2023-12-21T13:32:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/ABYXX7927AzqGbGTk5tm",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث نوفمبر 2023 للمراجعات",
                   product: "Ranking",
                   kind: "update",
                   start: "2023-11-08T08:59:00",
                   end: "2023-12-07T09:21:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث نوفمبر 2023 للمراجعات في Google.",
                   url: "https://status.search.google.com/incidents/VqRTcmyQCwfpuYeaVNfn",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث نوفمبر 2023 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2023-11-02T08:59:00",
                   end: "2023-11-28T09:21:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث نوفمبر 2023 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/WtY1CQgfqrr2cjxKbyUk",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في عرض نتائج البحث - أكتوبر 2023",
                   product: "Serving",
                   kind: "issue",
                   start: "2023-10-26T02:45:00",
                   end: "2023-10-26T08:51:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة في عرض نتائج البحث.",
                   url: "https://status.search.google.com/incidents/gNEys4Y3VYpGXWNndADm",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في Google - أكتوبر 2023",
                   product: "Indexing",
                   kind: "issue",
                   start: "2023-10-05T10:30:00",
                   end: "2023-10-05T16:20:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/hJzAUmMsBkMsVpBBatXZ",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أكتوبر 2023 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2023-10-05T08:54:00",
                   end: "2023-10-19T08:08:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أكتوبر 2023 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/VKyoS53ULWzSp8BoDxqk",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة على صعيد ترتيب النتائج",
                   product: "Ranking",
                   kind: "issue",
                   start: "2023-11-01T14:22:00",
                   end: "2023-11-01T14:26:00",
                   status: "مكتمل",
                   description: "تم حل مشكلة على صعيد ترتيب النتائج في بحث Google",
                   url: "https://status.search.google.com/incidents/fCUAy6TvbDMkkLAGcwkj",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أكتوبر 2023 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2023-10-04T09:52:00",
                   end: "2023-10-19T22:15:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أكتوبر 2023 الأساسي في Google, ينطبق على مستوى العالم ويحسن تغطية Google بلغات عديدة, بما في ذلك التركية, والفيتنامية, والإندونيسية, والهندية, والصينية, ولغات أخرى.",
                   url: "https://status.search.google.com/incidents/NzcEhGMDhbQEdXCS35xL",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث سبتمبر 2023 للمحتوى المفيد",
                   product: "Ranking",
                   kind: "update",
                   start: "2023-09-14T13:19:00",
                   end: "2023-09-28T00:07:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث سبتمبر 2023 للمحتوى المفيد في Google.",
                   url: "https://status.search.google.com/incidents/53diuQvcEsgzqXTPBb8p",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أغسطس 2023 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2023-08-22T10:37:00",
                   end: "2023-09-07T13:03:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أغسطس 2023 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/nBtYtBeex4GYBbdDS2LX",
                   articleUrl: ""
                 },
                 {
                   title: "مشكلة في فهرسة المحتوى في أخبار Google - يوليوز 2023",
                   product: "Indexing",
                   kind: "issue",
                   start: "2023-06-21T00:00:00",
                   end: "2023-07-14T14:06:00",
                   status: "تم الحل",
                   description: "تم حل مشكلة فهرسة المحتوى",
                   url: "https://status.search.google.com/incidents/QfKM8nXdV39zGE5w2eH1",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أبريل 2023 للمراجعات",
                   product: "Ranking",
                   kind: "update",
                   start: "2023-04-12T09:08:00",
                   end: "2023-04-25T11:24:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أبريل 2023 للمراجعات في Google.",
                   url: "https://status.search.google.com/incidents/5XRfC46rorevFt8yN8iR",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث مارس 2023 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2023-03-22T06:53:00",
                   end: "2023-03-28T07:26:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث مارس 2023 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/Cou8Tr74r7EXNthuEsaG",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث فبراير 2023 لمراجعات المنتجات",
                   product: "Ranking",
                   kind: "update",
                   start: "2023-03-22T06:51:00",
                   end: "2023-03-22T06:52:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث فبراير 2023 لمراجعات المنتجات في Google.",
                   url: "https://status.search.google.com/incidents/NDjZ11MEUJb5i62hy5aN",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث ديسمبر 2022 للروابط غير المرغوب فيها",
                   product: "Ranking",
                   kind: "spam",
                   start: "2022-12-14T00:00:00",
                   end: "2023-01-12T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث ديسمبر 2022 للروابط غير المرغوب فيها في Google.",
                   url: "https://status.search.google.com/incidents/CxXUEK28vCKqkNocPhKR",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث ديسمبر 2022 للمحتوى المفيد",
                   product: "Ranking",
                   kind: "update",
                   start: "2022-12-05T00:00:00",
                   end: "2023-01-12T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث ديسمبر 2022 للمحتوى المفيد في Google.",
                   url: "https://status.search.google.com/incidents/XMdX5PmbMvKW4fv3CRvn",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أكتوبر 2022 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2022-10-19T00:00:00",
                   end: "2022-10-21T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أكتوبر 2022 للمحتوى غير المرغوب فيه في Google.",
                   url: "https://status.search.google.com/incidents/SAeYuxVSo39HHotQNXHr",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث سبتمبر 2022 لمراجعات المنتجات",
                   product: "Ranking",
                   kind: "update",
                   start: "2022-09-20T00:00:00",
                   end: "2022-09-26T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث سبتمبر 2022 لمراجعات المنتجات في Google.",
                   url: "https://status.search.google.com/incidents/ZYwuBXDhkwaoop2V5epM",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث سبتمبر 2022 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2022-09-12T00:00:00",
                   end: "2022-09-26T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث سبتمبر 2022 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/Y2Cg5k2xLJvfNqR58kEt",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث أغسطس 2022 للمحتوى المفيد",
                   product: "Ranking",
                   kind: "update",
                   start: "2022-08-25T00:00:00",
                   end: "2022-09-09T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث أغسطس 2022 للمحتوى المفيد في Google.",
                   url: "https://status.search.google.com/incidents/sbKc4YSptrSxcUZFDKwU",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث يوليو 2022 لمراجعات المنتجات",
                   product: "Ranking",
                   kind: "update",
                   start: "2022-07-27T00:00:00",
                   end: "2022-08-02T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث يوليو 2022 لمراجعات المنتجات في Google.",
                   url: "https://status.search.google.com/incidents/Xiid524od7fpCak86sNS",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث ماي 2022 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2022-05-25T00:00:00",
                   end: "2022-06-09T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث ماي 2022 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/GHwLLtDS64a7nDng8xhD",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث مارس 2022 لمراجعات المنتجات",
                   product: "Ranking",
                   kind: "update",
                   start: "2022-03-23T00:00:00",
                   end: "2022-04-06T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث مارس 2022 لمراجعات المنتجات في Google.",
                   url: "https://status.search.google.com/incidents/iYWoNu4QXRsQUrzxrbLv",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث تجربة الصفحة على أجهزة الحاسوب",
                   product: "Ranking",
                   kind: "update",
                   start: "2022-02-22T00:00:00",
                   end: "2022-03-03T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث تجربة الصّفحة على أجهزة الحاسوب في Google.",
                   url: "https://status.search.google.com/incidents/zDCQR5mxLU3ZrQeQvwqN",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث ديسمبر 2021 لمراجعات المنتجات",
                   product: "Ranking",
                   kind: "update",
                   start: "2021-12-01T00:00:00",
                   end: "2021-12-21T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث ديسمبر 2021 لمراجعات المنتجات في Google.",
                   url: "https://status.search.google.com/incidents/hgwP7ei5H1uKbYSeZrBZ",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث نوفمبر 2021 الأساسي",
                   product: "Ranking",
                   kind: "core",
                   start: "2021-11-17T00:00:00",
                   end: "2021-11-30T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث نوفمبر 2021 الأساسي في Google.",
                   url: "https://status.search.google.com/incidents/FncPfR7zRSZ3diemah4o",
                   articleUrl: ""
                 },
                 {
                   title: "تحديث نوفمبر 2021 للمحتوى غير المرغوب فيه",
                   product: "Ranking",
                   kind: "spam",
                   start: "2021-11-03T00:00:00",
                   end: "2021-11-11T00:00:00",
                   status: "مكتمل",
                   description: "تم الانتهاء من إطلاق تحديث نوفمبر 2021 للمحتوى غير المرغوب فيه في Google.",
                   url: "https://status.search.google.com/incidents/AFdXceQVsh1GEfKFvHyD",
                   articleUrl: ""
                 }
               ];

               const products = [
                 { id: "Crawling", ar: "الزحف", en: "Crawling" },
                 { id: "Indexing", ar: "الفهرسة", en: "Indexing" },
                 { id: "Ranking", ar: "الترتيب", en: "Ranking" },
                 { id: "Serving", ar: "العرض", en: "Serving" }
               ];

               const root = document.querySelector(".gss-dashboard");
               if (!root) return;

               const $ = (id) => root.querySelector("#" + id);

               const DAY_MS = 86400000;
               const LIVE_URL = "https://status.search.google.com/incidents.json";
               const PACIFIC_TZ = "America/Los_Angeles";
               const CAL_DAYS = 10;
               const ACTIVE_MAX_AGE_DAYS = 60;
               const RECORDS_INITIAL = 5;
               const RECORDS_STEP = 10;
               const DONE_VISIBLE_DAYS = 3;
               const KIND_INFO = {
                 core: {
                   label: "تحديث أساسي",
                   chip: "التحديثات الأساسية",
                   update: true,
                   url: "/2023/04/Google-Core-Updates.html",
                   def: "التحديث الأساسي (Core Update) تغيير واسع تجريه جوجل على أنظمة الترتيب لديها لتحسين تقديم المحتوى المفيد والموثوق في نتائج البحث. قد يرتفع ترتيب بعض الصفحات أو ينخفض دون وجود خطإ في موقعك الإلكتروني. ويستغرق طرحه عادة من بضعة أيام إلى عدة أسابيع.",
                   impact: "يؤثر هذا التحديث على ترتيب نتائج البحث. قد تلاحظ تغيرات في ترتيب الصفحات خلال فترة الطرح."
                 },
                 spam: {
                   label: "تحديث المحتوى غير المرغوب فيه",
                   chip: "تحديثات السبام",
                   update: true,
                   url: "/2024/09/Google-spam-update.html",
                   def: "تحديث المحتوى غير المرغوب فيه (Spam Update) أو تحديث السبام، تغييرات تجريها جوجل على أنظمة رصد المحتوى غير المرغوب فيه لتتحسن في اكتشاف الممارسات المخالفة لسياسات البحث مثل المحتوى المزعج والروابط المصطنعة. قد ينخفض ترتيب المواقع المخالفة أو تُستبعد من النتائج. ويستغرق طرحه عادة من بضعة أيام إلى أسبوعين.",
                   impact: "يستهدف هذا التحديث المحتوى والممارسات المخالفة لسياسات البحث. وقد يؤثر على ترتيب بعض الصفحات."
                 },
                 update: {
                   label: "تحديث",
                   chip: "تحديثات أخرى",
                   update: true,
                   url: "",
                   def: "",
                   impact: "قد يؤثر هذا التحديث على ترتيب بعض نتائج البحث."
                 },
                 issue: {
                   label: "مشكلة تقنية",
                   chip: "المشكلات التقنية",
                   update: false,
                   url: "",
                   def: "",
                   impact: ""
                 }
               };

               const IMPACT_ISSUE = {
                 Crawling: "مشكلة جارية في زحف جوجل إلى المحتوى.",
                 Indexing: "مشكلة جارية في فهرسة المحتوى في جوجل.",
                 Ranking: "مشكلة جارية تؤثر على ترتيب النتائج.",
                 Serving: "مشكلة جارية في عرض نتائج بحث جوجل.",
                 fallback: "مشكلة تقنية جارية في أنظمة بحث جوجل."
               };

               const TRAFFIC_GUIDE_URL = "https://developers.google.com/search/docs/appearance/core-updates?hl=ar";
    			const SPAM_POLICIES_URL = "https://developers.google.com/search/docs/essentials/spam-policies?hl=ar";

    			const SPAM_POLICIES = [
      "الحجب",
      "إساءة استخدام الصفحات الأمامية",
      "إساءة استخدام النطاقات المنتهية الصلاحية",
      "المحتوى الذي تم اختراقه",
      "إساءة استخدام النص المخفي والروابط المخفية",
      "ازدحام الكلمات الرئيسية",
      "الروابط غير المرغوب فيها",
      "عدد الزيارات الذي يتم إنشاؤه بطريقة آلية",
      "الممارسات الضارة",
      "الوظائف المضللة",
      "إساءة استخدام المحتوى واسع النطاق",
      "سرقة المحتوى",
      "إساءة استخدام سمعة المواقع الإلكترونية",
      "عمليات إعادة التوجيه الخداعية",
      "التبعية الإعلانية",
      "المحتوى غير المرغوب فيه الذي أنشأه المستخدمون",
      "الممارسات الأخرى التي قد تؤدي إلى خفض الترتيب أو الإزالة",
      "التحايل على السياسات",
      "الخداع والاحتيال"
    ];

    const DANGER_ICON = '<svg class="gss-danger-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
               const kindOf = (item) => (KIND_INFO[item && item.kind] ? item.kind : "update");
               const isActive = (item) => !!item.start && !item.end;
               const CAL_TZ = (() => {
                 try {
                   const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                   if (tz) {
                     new Intl.DateTimeFormat("en-CA", { timeZone: tz });
                     return tz;
                   }
                 } catch (_) {}
                 return "Africa/Casablanca";
               })();

               const tzLabel = () => {
                 try {
                   const part = new Intl.DateTimeFormat("en", { timeZone: CAL_TZ, timeZoneName: "short" })
                     .formatToParts(new Date())
                     .find((x) => x.type === "timeZoneName");
                   return CAL_TZ + ", " + (part ? part.value : "");
                 } catch (_) {
                   return CAL_TZ;
                 }
               };

               const pacificFmt = new Intl.DateTimeFormat("en-US", {
                 timeZone: PACIFIC_TZ, hourCycle: "h23", year: "numeric", month: "2-digit",
                 day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"
               });

               const pacificOffset = (utcMs) => {
                 const p = {};
                 pacificFmt.formatToParts(new Date(utcMs)).forEach((x) => { p[x.type] = x.value; });
                 const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second);
                 return asUTC - Math.floor(utcMs / 1000) * 1000;
               };
               const toDate = (value) => {
                 if (value instanceof Date) return value;
                 const str = String(value || "").trim();
                 const m = str.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/);
                 if (m) {
                   const guess = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0));
                   const first = guess - pacificOffset(guess);
                   return new Date(guess - pacificOffset(first));
                 }
                 return new Date(str);
               };

               const isDateOnly = (value) => /T00:00(:00)?(Z|\+00:00)?$/.test(String(value || ""));

               const dateValue = (value) => {
                 if (!value) return "غير محدد";
                 const d = toDate(value);
                 if (Number.isNaN(d.getTime())) return "غير محدد";
                 const plain = /^\d{4}-\d{2}-\d{2}$/.test(String(value)) || isDateOnly(value);
                 return new Intl.DateTimeFormat("ar-MA", {
                   day: "numeric",
                   month: "long",
                   year: "numeric",
                   timeZone: plain ? "UTC" : CAL_TZ
                 }).format(d);
               };

               const yearValue = (item) => {
                 const value = item.start || item.end;
                 if (!value) return "";
                 const d = toDate(value);
                 return Number.isNaN(d.getTime()) ? "" : String(d.getUTCFullYear());
               };

               const timestamp = (item) => {
                 const d = toDate(item.start || item.end || "1970-01-01");
                 return Number.isNaN(d.getTime()) ? 0 : d.getTime();
               };

               const productName = (id) => {
                 const p = products.find((item) => item.id === id);
                 return p ? p.ar : id === "Discover" ? "Google Discover" : id;
               };

               const pluralAr = (n, one, two, few, many) =>
                 n === 1 ? one : n === 2 ? two : n <= 10 ? n + " " + few : n + " " + many;

               const formatSpan = (ms) => {
                 const minutes = Math.round(ms / 60000);
                 if (minutes < 60) return minutes + " دقيقة";
                 const hours = Math.floor(minutes / 60);
                 if (hours < 24) return hours + " ساعة";
                 const days = Math.floor(hours / 24);
                 const remainingHours = hours % 24;
                 return days + " يوم" + (remainingHours ? " و" + remainingHours + " ساعة" : "");
               };

               const duration = (item) => {
                 if (!item.start || !item.end) return "غير محددة";
                 const start = toDate(item.start).getTime();
                 const end = toDate(item.end).getTime();
                 if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) {
                   return "غير محددة";
                 }
                 return formatSpan(end - start);
               };

               const relativeAge = (value) => {
                 const d = toDate(value);
                 if (Number.isNaN(d.getTime())) return "";
                 const days = Math.floor((Date.now() - d.getTime()) / DAY_MS);
                 if (days < 1) return "اليوم";
                 if (days < 30) return "منذ " + pluralAr(days, "يوم", "يومين", "أيام", "يوما");
                 const months = Math.floor(days / 30);
                 if (months < 12) return "منذ " + pluralAr(months, "شهر", "شهرين", "أشهر", "شهرا");
                 const years = Math.floor(days / 365);
                 return "منذ " + pluralAr(years, "سنة", "سنتين", "سنوات", "سنة");
               };

               const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
                 "&": "&amp;",
                 "<": "&lt;",
                 ">": "&gt;",
                 '"': "&quot;",
                 "'": "&#39;"
               })[ch]);

               const validURL = (value) => {
                 try {
                   const url = new URL(value);
                   return url.protocol === "https:" ? url.href : "https://status.search.google.com/";
                 } catch (_) {
                   return "https://status.search.google.com/";
                 }
               };

               const sortedIncidents = () =>
                 incidents.slice().sort((a, b) => timestamp(b) - timestamp(a));

               const idFromUrl = (u) => {
                 const m = String(u || "").match(/incidents\/([^/?#]+)/);
                 return m ? m[1] : "";
               };

               const PRODUCT_IDS = {
                 QAVfsAEBQ159b2mEWBYF: "Crawling",
                 DRyTdKyPd41QXD2hnncp: "Indexing",
                 rGHU1u87FJnkP6W2GwMi: "Ranking",
                 pKUD9XkLn3TBLquSpQMD: "Serving"
               };
               const MONTHS_EN = {
                 january: "يناير", february: "فبراير", march: "مارس", april: "أبريل",
                 may: "ماي", june: "يونيو", july: "يوليوز", august: "أغسطس",
                 september: "سبتمبر", october: "أكتوبر", november: "نوفمبر", december: "ديسمبر"
               };

               const UPDATE_NAMES = {
                 "helpful content": "تحديث المحتوى المفيد",
                 "reviews": "تحديث المراجعات",
                 "product reviews": "تحديث مراجعات المنتجات",
                 "link spam": "تحديث الروابط غير المرغوب فيها"
               };

               const translateTitle = (en) => {
                 const t = String(en || "").trim();
                 let m = t.match(/^([A-Za-z]+)\s+(\d{4})\s+(.+?)\s+update$/i);
                 if (m && MONTHS_EN[m[1].toLowerCase()]) {
                   const month = MONTHS_EN[m[1].toLowerCase()] + " " + m[2];
                   const name = m[3].toLowerCase();
                   if (name === "core") return "تحديث أساسي - " + month;
                   if (name === "spam") return "تحديث المحتوى غير المرغوب فيه - " + month;
                   if (name === "discover" || name === "discover core") return "التحديث الأساسي لـ Discover - " + month;
                   if (UPDATE_NAMES[name]) return UPDATE_NAMES[name] + " - " + month;
                 }
                 m = t.match(/^(Crawling|Indexing|Ranking|Serving)\s+(?:is|was|were)\s+(?:experiencing|having)\s+(?:an?\s+)?(?:issues?|problems?)/i);
                 if (m) {
                   const p = products.find((x) => x.en.toLowerCase() === m[1].toLowerCase());
                   return "مشكلة في " + (p ? p.ar : m[1]);
                 }
                 return t;
               };

               const inferKind = (titleEn, impact) => {
                 const t = String(titleEn || "").toLowerCase();
                 if (/core update/.test(t)) return "core";
                 if (/spam update/.test(t)) return "spam";
                 if (/issue|outage|disruption|problem/.test(t) || /DISRUPTION|OUTAGE/.test(String(impact || ""))) return "issue";
                 return "update";
               };

               const WORD_NUM = { a: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };

               const estimateFromText = (text) => {
                 const m = String(text || "").match(/up to\s+(?:about\s+)?(a|one|two|three|four|five|six|\d+)\s+weeks?/i);
                 if (!m) return null;
                 const key = m[1].toLowerCase();
                 const n = WORD_NUM[key] || parseInt(key, 10);
                 return n ? n * 7 : null;
               };

               const estimateFromLive = (inc) => {
                 if (!inc) return null;
                 const texts = (inc.updates || []).map((u) => u && u.text).concat([inc.most_recent_update && inc.most_recent_update.text]);
                 return estimateFromText(texts.join(" "));
               };

               const estimateLabel = (days) => {
                 if (!days) return "";
                 if (days % 7 === 0) {
                   const w = days / 7;
                   return "حتى " + (w === 1 ? "أسبوع" : w === 2 ? "أسبوعين" : w <= 10 ? w + " أسابيع" : w + " أسبوعا");
                 }
                 return "حتى " + pluralAr(days, "يوم", "يومين", "أيام", "يوما");
               };

               const cleanText = (text) => String(text || "").replace(/\s*<https?:[^>]*>/g, "").trim();

               let liveData = [];

               const fullMomentFmt = new Intl.DateTimeFormat("ar-MA", {
                 day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
                 hourCycle: "h23", timeZone: CAL_TZ
               });
               const fullDayFmt = new Intl.DateTimeFormat("ar-MA", {
                 day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
               });

function getActiveItems() {
  const items = [];
  const now = Date.now();
  const liveById = {};
  const usedIds = new Set();
  const keepDone = (d) => now - d.getTime() <= DONE_VISIBLE_DAYS * DAY_MS;

  liveData.forEach((inc) => { if (inc && inc.id) liveById[inc.id] = inc; });

  incidents.filter((item) => item.start).forEach((item) => {
    const start = toDate(item.start);
    if (Number.isNaN(start.getTime())) return;
    const id = idFromUrl(item.url);
    const live = liveById[id];

    let doneAt = null;
    if (item.end) doneAt = toDate(item.end);
    else if (live && live.end) doneAt = toDate(live.end);
    if (doneAt && Number.isNaN(doneAt.getTime())) doneAt = null;

    if (doneAt && !keepDone(doneAt)) return;
    if (id) usedIds.add(id);

    items.push({
      source: "manual",
      kind: kindOf(item),
      products: [item.product],
      title: item.title,
      description: item.description || "",
      url: item.url,
      articleUrl: item.articleUrl || "",
      start: start,
      doneAt: doneAt,
      scheduled: !!item.scheduled && !doneAt,
	  scheduledFor: item.scheduledFor || "",
      maxDays: Number(item.maxDays) || estimateFromLive(live) || null
    });
  });

  liveData.forEach((inc) => {
    if (!inc || !inc.begin || usedIds.has(inc.id)) return;
    const start = toDate(inc.begin);
    if (Number.isNaN(start.getTime())) return;

    let doneAt = null;
    if (inc.end) {
      doneAt = toDate(inc.end);
      if (Number.isNaN(doneAt.getTime()) || !keepDone(doneAt)) return;
    } else if (now - start.getTime() > ACTIVE_MAX_AGE_DAYS * DAY_MS) {
      return;
    }

    const en = inc.external_desc || "";
    const prods = (inc.affected_products || []).map((p) => PRODUCT_IDS[p.id]).filter(Boolean);
    if (!prods.length && PRODUCT_IDS[inc.service_key]) prods.push(PRODUCT_IDS[inc.service_key]);
    items.push({
      source: "live",
      kind: inferKind(en, inc.status_impact),
      products: prods,
      title: translateTitle(en) || "حادثة",
      description: cleanText(inc.most_recent_update && inc.most_recent_update.text),
      url: "https://status.search.google.com/" + (inc.uri || ("incidents/" + inc.id)),
      articleUrl: "",
      start: start,
      doneAt: doneAt,
      scheduled: !doneAt && /pre-?announced|scheduled to be released/i.test(String(inc.most_recent_update &&           inc.most_recent_update.text || "")),
      scheduledFor: "",
      maxDays: estimateFromLive(inc)
    });
  });

  items.sort((a, b) => (a.doneAt ? 1 : 0) - (b.doneAt ? 1 : 0));
  return items;
}

               function liveCard(item) {
                 const info = KIND_INFO[item.kind] || KIND_INFO.update;
                 const done = !!item.doneAt;
                 const sched = !!item.scheduled && !done;
                 const endMs = done ? item.doneAt.getTime() : Date.now();
                 const elapsed = Math.max(0, endMs - item.start.getTime());
                 const total = item.maxDays ? item.maxDays * DAY_MS : 0;
                 const over = !done && total > 0 && elapsed > total;

                 let pct = null;
                 if (done) pct = 100;
                 else if (!sched && total > 0) pct = Math.min(100, (elapsed / total) * 100);
                 const pctText = pct === null ? "" : (pct > 0 && pct < 1 ? 1 : Math.round(pct));

                 const names = item.products.map(productName).join(" و ");
                 const impact = item.kind === "issue"
                   ? (IMPACT_ISSUE[item.products[0]] || IMPACT_ISSUE.fallback)
                   : info.impact;

                 const badge = sched ? "تحديث مجدول" : done ? (item.kind === "issue" ? "تم حل المشكلة" : "اكتمل الطرح") : item.kind === "issue" ? "مشكلة جارية الآن" : item.kind === "spam" ? "تحذير: تحديث السبام قيد الإطلاق" : "قيد الإطلاق الآن";

    const policies = item.kind === "spam" && !done ? `
      <div class="gss-policies">
        <h4 class="gss-policies-title">${DANGER_ICON}قد يستهدف هذا التحديث مخالفات سياسات Google لمكافحة السبام</h4>
        <ul class="gss-policies-list">${SPAM_POLICIES.map((p) => `<li>${escapeHTML(p)}</li>`).join("")}</ul>
        <p class="gss-policies-note">تفاصيل كل سياسة في وثائق Google. <a href="${SPAM_POLICIES_URL}" target="_blank" rel="noopener noreferrer">سياسات البحث لمكافحة السبام</a></p>
      </div>` : "";
                 const classes = "gss-live-card is-" + item.kind + (done ? " is-done" : "") + (over ? " is-over" : "") + (sched ? " is-scheduled" : "");

                 const meta = [];
					if (sched) {
					  meta.push(["أُعلن عنه (بتوقيتك المحلي)", fullMomentFmt.format(item.start)]);
					  meta.push(["موعد الطرح المتوقع", item.scheduledFor || "لم يُحدَّد بعد"]);
					} else {
					  meta.push(["بدأ (بتوقيتك المحلي)", fullMomentFmt.format(item.start)]);
					  if (done) {
					    meta.push(["اكتمل في", fullMomentFmt.format(item.doneAt)]);
					    meta.push(["استغرق الطرح", formatSpan(elapsed)]);
					  } else {
 					   meta.push(["مستمر منذ", formatSpan(elapsed)]);
 					   if (item.maxDays) meta.push(["المدة التقديرية", estimateLabel(item.maxDays)]);
					  }
					}

                 let progress = "";
                 if (pct !== null && !done) {
                   const note = done
                     ? "أعلنت Google اكتمال الطرح." + (item.source === "manual" ? " سيتم تحديث السجل قريبا." : "")
                     : over
                       ? "تجاوز الطرح المدة التي قدّرتها جوجل وما زال مستمرا."
                       : "نسبة تقديرية محسوبة من المدة المنقضية مقارنة بأقصى مدة ذكرتها جوجل. قد ينتهي الطرح قبل ذلك.";
                   progress = `
                     <div class="gss-progress">
                       <div class="gss-progress-top">
                         <span>تقدّم الطرح (تقديري)</span>
                         <strong>${done ? "اكتمل" : pctText + "%"}</strong>
                       </div>
                       <div class="gss-bar" role="progressbar" aria-label="تقدم الطرح التقديري" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct)}">
                         <span style="width:${pct.toFixed(1)}%"></span>
                       </div>
                       <p class="gss-progress-note">${note}</p>
                     </div>`;
                 }

                 const tip = item.kind === "core" && !done
                   ? `<p class="gss-live-tip"> تنصح Google باعطاء بعض الوقت للموقع الإلكتروني خلال وبعد اكتمال التحديث الأساسي قبل تحليل الأداء أو اتّخاذ إجراءات كبيرة. <a href="${TRAFFIC_GUIDE_URL}">موقعك الإلكتروني وتحديثات بحث Google الأساسيَّة</a></p>`
                   : "";

                 return `
                   <article class="${classes}">
                     <div class="gss-live-head">
    				 ${item.kind === "spam" && !done ? DANGER_ICON : ""}
                       <span class="gss-live-badge">${done ? '<span aria-hidden="true">✓</span>' : sched ? '<span aria-hidden="true">◷</span>' : '<span class="gss-pulse"></span>'}${badge}</span>
                       <span class="gss-tag is-${item.kind}">${escapeHTML(info.label)}</span>
                       ${names ? `<span class="gss-tag">${escapeHTML(names)}</span>` : ""}
                     </div>
                     <h3>${item.articleUrl ? `<a class="gss-live-title-link" href="${escapeHTML(item.articleUrl)}">${escapeHTML(item.title)}</a>` : escapeHTML(item.title)}</h3>
                     ${item.description ? `<p class="gss-live-desc">${escapeHTML(item.description)}</p>` : ""}
                     ${impact && !done ? `<p class="gss-live-impact">${escapeHTML(impact)}</p>` : ""}
                     ${sched ? `<p class="gss-live-impact">لم تحدد Google موعد بدء الطرح بعد. ستتحول هذه البطاقة إلى "قيد الإطلاق" فور بدئه.</p>` : ""}
    				 ${policies}
                     ${progress}
                     <div class="gss-live-meta">
                       ${meta.map((row) => `<div><span class="gss-meta-label">${row[0]}</span><span class="gss-meta-value">${escapeHTML(row[1])}</span></div>`).join("")}
                     </div>
                     ${tip}
                     ${item.articleUrl ? "" : `<div class="gss-live-actions"><a class="gss-link" href="${escapeHTML(validURL(item.url))}" target="_blank" rel="noopener noreferrer">المصدر الرسمي</a></div>`}
                   </article>`;
               }

               function renderLive() {
                 const box = $("gss-live");
                 if (!box) return;
                 const items = getActiveItems();
                 if (!items.length) {
                   box.hidden = true;
                   box.innerHTML = "";
                   return;
                 }
                 box.hidden = false;
                 box.innerHTML = items.map(liveCard).join("");
               }

               function renderSystems() {
                 const activeItems = getActiveItems().filter((i) => !i.doneAt);

                 $("gss-systems").innerHTML = products.map((product) => {
                   const related = sortedIncidents().filter((item) => item.product === product.id);
                   const active = activeItems.find((item) => item.products.indexOf(product.id) !== -1);
                   const latest = related[0];

                   const statusHTML = active
                     ? '<span class="gss-status is-active"><span class="gss-pulse"></span> ' +
                       (active.kind === "issue" ? "مشكلة جارية" : active.scheduled ? "تحديث مجدول" : "تحديث قيد الإطلاق") + "</span>"
                     : '<span class="gss-status"><span class="gss-dot"></span> لا توجد حادثة نشطة مسجلة</span>';

                   const latestDate = latest
                     ? (latest.end ? dateValue(latest.end) : latest.scheduled ? "مجدول" : "قيد الإطلاق")
                     : "\u2014";

                   return `
                     <article class="gss-system">
                       <div class="gss-system-top">
                         <div>
                           <div class="gss-system-name">${escapeHTML(product.ar)}</div>
                           <div class="gss-system-en">${escapeHTML(product.en)}</div>
                         </div>
                         ${statusHTML}
                       </div>
                       <div class="gss-system-last">
                         آخر حادث مسجل
                         <strong>${latest ? escapeHTML(latest.title) : "لا توجد سجلات بعد"}</strong>
                         <span>${escapeHTML(latestDate)}</span>
                       </div>
                     </article>`;
                 }).join("");
               }

               let toastTimer = null;

               function showToast(message) {
                 const toast = $("gss-toast");
                 if (!toast) return;
                 toast.innerHTML = message;
                 toast.classList.add("is-on");
                 clearTimeout(toastTimer);
                 toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2600);
               }

               async function copyText(text) {
                 try {
                   if (navigator.clipboard && window.isSecureContext) {
                     await navigator.clipboard.writeText(text);
                     return true;
                   }
                 } catch (_) {}

                 try {
                   const area = document.createElement("textarea");
                   area.value = text;
                   area.setAttribute("readonly", "");
                   area.style.position = "fixed";
                   area.style.opacity = "0";
                   document.body.appendChild(area);
                   area.select();
                   const ok = document.execCommand("copy");
                   document.body.removeChild(area);
                   return ok;
                 } catch (_) {
                   return false;
                 }
               }

               function initShare() {
                 const button = $("gss-share");
                 if (!button) return;

                 button.addEventListener("click", async () => {
                   const canonical = document.querySelector('link[rel="canonical"]');
                   const url = (canonical && canonical.href) || window.location.href.split("#")[0];
                   const title = document.title || "حالة بحث Google";

                   if (navigator.share) {
                     try {
                       await navigator.share({ title: title, url: url });
                       return;
                     } catch (error) {
                       if (error && error.name === "AbortError") return;
                     }
                   }

                   const copied = await copyText(url);
                   showToast(copied ? "تم نسخ رابط الصفحة" : "تعذّر النسخ - انسخ الرابط من شريط العنوان");
                 });
               }

               const momentFmt = new Intl.DateTimeFormat("ar-MA", {
                 day: "numeric", month: "long", hour: "2-digit", minute: "2-digit",
                 hourCycle: "h23", timeZone: CAL_TZ
               });
               const momentDateFmt = new Intl.DateTimeFormat("ar-MA", {
                 day: "numeric", month: "long", timeZone: "UTC"
               });
               const fmtMoment = (value) => {
                 if (!value) return "";
                 const d = toDate(value);
                 if (Number.isNaN(d.getTime())) return "";
                 return isDateOnly(value) ? momentDateFmt.format(d) : momentFmt.format(d);
               };

               const LEVELS = {
                 0: { cls: "", icon: "✓", label: "متاح" },
                 1: { cls: "is-info", icon: "i", label: "معلومات الخدمة / تحديث" },
                 2: { cls: "is-warn", icon: "!", label: "اضطراب في الخدمة" },
                 3: { cls: "is-out", icon: "×", label: "انقطاع في الخدمة" }
               };

               const keyFmt = new Intl.DateTimeFormat("en-CA", {
                 timeZone: CAL_TZ, year: "numeric", month: "2-digit", day: "2-digit"
               });
               const toKey = (date) => keyFmt.format(date);
               const keyToUTC = (key) => {
                 const p = key.split("-").map(Number);
                 return Date.UTC(p[0], p[1] - 1, p[2]);
               };
               const utcToKey = (ms) => new Date(ms).toISOString().slice(0, 10);

               function manualEvents() {
                 return incidents
                   .filter((i) => i.start)
                   .map((i) => ({
                     product: i.product,
                     level: i.kind === "issue" ? 2 : 1,
                     title: i.title,
                     url: i.url,
                     articleUrl: i.articleUrl || "",
                     start: i.start,
                     end: i.end || null
                   }));
               }

               function liveEvents(list) {
                 const out = [];
                 list.forEach((inc) => {
                   if (!inc || !inc.begin) return;
                   const impact = String(inc.status_impact || "");
                   const level = /OUTAGE/.test(impact) ? 3 : /DISRUPTION/.test(impact) ? 2 : 1;
                   const manual = incidents.find((m) => idFromUrl(m.url) === inc.id);
                   const prods = inc.affected_products && inc.affected_products.length
                     ? inc.affected_products
                     : [{ id: inc.service_key, title: inc.service_name }];
                   prods.forEach((p) => {
                     out.push({
                       product: PRODUCT_IDS[p.id] || p.title,
                       level: level,
                       title: manual ? manual.title : (translateTitle(inc.external_desc || "") || "حادثة"),
                       url: "https://status.search.google.com/" + (inc.uri || ("incidents/" + inc.id)),
                       articleUrl: manual ? (manual.articleUrl || "") : "",
                       start: inc.begin,
                       end: inc.end || null
                     });
                   });
                 });
                 return out;
               }

               let calState = { days: [], map: {}, today: "" };

               function buildCalendar(events) {
                 const today = toKey(new Date());
                 const todayMs = keyToUTC(today);
                 const days = [];
                 for (let i = CAL_DAYS - 1; i >= 0; i--) days.push(utcToKey(todayMs - i * DAY_MS));
                 const firstMs = keyToUTC(days[0]);

                 const map = {};
                 products.forEach((p) => { map[p.id] = {}; });

                 events.forEach((ev) => {
                   if (!map[ev.product]) return;
                   const s = toDate(ev.start);
                   if (Number.isNaN(s.getTime())) return;
                   let e = ev.end ? toDate(ev.end) : new Date();
                   if (Number.isNaN(e.getTime()) || e < s) e = s;
                   let a = keyToUTC(toKey(s));
                   const b = keyToUTC(toKey(e));
                   if (b < firstMs || a > todayMs) return;
                   if (a < firstMs) a = firstMs;
                   for (let t = a; t <= b && t <= todayMs; t += DAY_MS) {
                     const k = utcToKey(t);
                     const cell = map[ev.product][k] || (map[ev.product][k] = { level: 0, items: [] });
                     cell.level = Math.max(cell.level, ev.level);
                     cell.items.push(ev);
                   }
                 });

                 calState = { days: days, map: map, today: today };
               }

               const dayFmt = new Intl.DateTimeFormat("ar-MA", { day: "numeric", timeZone: "UTC" });
               const monthFmt = new Intl.DateTimeFormat("ar-MA", { month: "long", timeZone: "UTC" });
               const fullFmt = new Intl.DateTimeFormat("ar-MA", {
                 day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
               });

               function renderCalendar() {
                 const st = calState;
                 const old = CAL_DAYS - 7;

                 let html = '<div class="gss-cal-corner"></div>';
                 html += st.days.map((k, i) => {
                   const d = new Date(keyToUTC(k));
                   return `<div class="gss-cal-day${i < old ? " gss-old" : ""}${k === st.today ? " is-today" : ""}">
                     <strong>${escapeHTML(dayFmt.format(d))}</strong>
                     <span>${escapeHTML(monthFmt.format(d))}</span>
                   </div>`;
                 }).join("");

                 products.forEach((p) => {
                   html += `<div class="gss-cal-name">${escapeHTML(p.ar)}<small>${escapeHTML(p.en)}</small></div>`;
                   html += st.days.map((k, i) => {
                     const cell = st.map[p.id][k];
                     const lvl = cell ? cell.level : 0;
                     const info = LEVELS[lvl];
                     const full = fullFmt.format(new Date(keyToUTC(k)));
                     const label = p.ar + " \u2014 " + full + ": " + info.label;
                     return `<button type="button" class="gss-cell ${info.cls}${i < old ? " gss-old" : ""}"
                       data-p="${escapeHTML(p.id)}" data-d="${escapeHTML(k)}"
                       title="${escapeHTML(label)}" aria-label="${escapeHTML(label)}">${info.icon}</button>`;
                   }).join("");
                 });

                 $("gss-cal").innerHTML = html;
               }

               function showCellDetail(pid, key, btn) {
                 const p = products.find((x) => x.id === pid);
                 const cell = calState.map[pid] && calState.map[pid][key];
                 const full = fullFmt.format(new Date(keyToUTC(key)));

                 root.querySelectorAll(".gss-cell.is-selected").forEach((el) => el.classList.remove("is-selected"));
                 if (btn) btn.classList.add("is-selected");

                 let body;
                 if (!cell || !cell.items.length) {
                   body = "لا توجد حوادث أو تحديثات مسجلة لهذا النظام في هذا اليوم.";
                 } else {
                   const seen = new Set();
                   const rows = cell.items.filter((it) => {
                     const sig = it.title + "|" + it.url;
                     if (seen.has(sig)) return false;
                     seen.add(sig);
                     return true;
                   }).map((it) => {
                     const span = it.end
                       ? "من " + fmtMoment(it.start) + " إلى " + fmtMoment(it.end)
                       : "بدأت " + fmtMoment(it.start) + " وما زالت مستمرة";
                     const article = it.articleUrl
  ? `<a class="gss-cal-article" href="${escapeHTML(it.articleUrl)}">تغطيتنا</a>`
  : "";
return `<li><span class="gss-cal-line"><a href="${escapeHTML(validURL(it.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(it.title)}</a>${article}</span><span class="gss-cal-time">${escapeHTML(span)}</span></li>`;
                   }).join("");
                   body = `<ul>${rows}</ul>`;
                 }

                 $("gss-cal-detail").innerHTML =
                   `<h4>${escapeHTML(p ? p.ar : pid)} \u2014 ${escapeHTML(full)}</h4>${body}`;
               }

               $("gss-cal").addEventListener("click", (event) => {
  const btn = event.target.closest(".gss-cell");
  if (!btn) return;
  if (btn.classList.contains("is-selected")) {
    btn.classList.remove("is-selected");
    $("gss-cal-detail").textContent = "اختر يوما من الجدول أعلاه لمعرفة ما حدث فيه.";
    return;
  }
  showCellDetail(btn.getAttribute("data-p"), btn.getAttribute("data-d"), btn);
});

               function setSource(text) {
                 $("gss-cal-source").innerHTML = text;
               }

               async function loadLiveCalendar() {
                 const controller = typeof AbortController === "function" ? new AbortController() : null;
                 const timer = controller ? setTimeout(() => controller.abort(), 8000) : null;
                 try {
                   const res = await fetch(LIVE_URL, { cache: "no-store", signal: controller ? controller.signal : undefined });
                   if (!res.ok) throw new Error("HTTP " + res.status);
                   const data = await res.json();
                   if (!Array.isArray(data)) throw new Error("Unexpected format");
                   liveData = data;
                   buildCalendar(liveEvents(data));
                   renderCalendar();
                   renderLive();
                   renderSystems();
                   $("gss-cal-detail").textContent = "اختر يوما من الجدول أعلاه لمعرفة ما حدث فيه.";
                   setSource("المصدر: بيانات مباشرة من Google Search Status Dashboard - الأوقات بتوقيتك المحلي (" + tzLabel() + ").");
                 } catch (_) {
                   setSource("تعذّر الاتصال المباشر بـ Google حاليا - لذلك يُعرض الجدول اعتمادا على السجل اليدوي للوحة فقط. الأوقات بتوقيتك المحلي (" + tzLabel() + ").");
                 } finally {
                   if (timer) clearTimeout(timer);
                 }
               }

               function initCalendar() {
                 buildCalendar(manualEvents());
                 renderCalendar();
                 setSource("جارٍ تحميل البيانات المباشرة من Google...");
                 loadLiveCalendar();
               }

               function renderStats() {
                 const kinds = { core: 0, spam: 0, update: 0, issue: 0 };
                 incidents.forEach((i) => { kinds[kindOf(i)] += 1; });
                 const updates = kinds.core + kinds.spam + kinds.update;

                 $("gss-stat-total").textContent = incidents.length;
                 $("gss-stat-updates").textContent = updates;
                 $("gss-stat-issues").textContent = kinds.issue;
                 $("gss-stat-updates-note").textContent =
                   "منها " + kinds.core + " أساسي و " + kinds.spam + " للمحتوى غير المرغوب فيه";
                 $("gss-total-top").textContent = incidents.length;
               }

               function populateYears() {
                 const years = [...new Set(incidents.map(yearValue).filter(Boolean))].sort((a, b) => b - a);
                 const select = $("gss-year");
                 select.innerHTML = '<option value="all">جميع السنوات</option>' +
                   years.map((year) => `<option value="${escapeHTML(year)}">${escapeHTML(year)}</option>`).join("");
               }

               const KIND_ORDER = ["all", "core", "spam", "update", "issue"];
               let kindFilter = "all";
               let visibleCount = RECORDS_INITIAL;

               function renderChips() {
                 const counts = { all: incidents.length, core: 0, spam: 0, update: 0, issue: 0 };
                 incidents.forEach((i) => { counts[kindOf(i)] += 1; });

                 $("gss-chips").innerHTML = KIND_ORDER.map((k) => {
                   const label = k === "all" ? "الكل" : KIND_INFO[k].chip;
                   const on = kindFilter === k;
                   return `<button type="button" class="gss-chip${on ? " is-on" : ""}" data-kind="${k}" aria-pressed="${on}">${label}<em>${counts[k]}</em></button>`;
                 }).join("");
               }

               function renderKindNote() {
                 const note = $("gss-kind-note");
                 const info = KIND_INFO[kindFilter];
                 if (!info || !info.def) {
                   note.hidden = true;
                   note.innerHTML = "";
                   return;
                 }
                 note.hidden = false;
                 note.style.setProperty("--kc", kindFilter === "spam" ? "var(--gss-spam-c)" : "var(--gss-info-c)");
                 note.innerHTML = "<strong>" + info.label + "</strong><p>" + info.def + "</p>" +
                   (info.url ? '<a href="' + info.url + '">مزيد من التفاصيل في مدونتنا</a>' : "");
               }

               function updateMore(total, shown) {
                 const wrap = $("gss-records-wrap");
                 const more = $("gss-more");
                 const remaining = total - shown;
                 let html = "";

                 if (remaining > 0) {
                   html += `<button type="button" class="gss-more-btn" data-act="more">
                     <span>عرض المزيد</span>
                     <span class="gss-more-count">${remaining}</span>
                     <svg aria-hidden="true" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
                   </button>`;
                 }

                 if (shown > RECORDS_INITIAL) {
                   html += `<button type="button" class="gss-more-btn" data-act="less">
                     <span>عرض أقل</span>
                     <svg aria-hidden="true" viewbox="0 0 24 24"><path d="m18 15-6-6-6 6"></path></svg>
                   </button>`;
                 }

                 wrap.classList.toggle("has-more", remaining > 0);
                 more.classList.toggle("is-overlay", remaining > 0);
                 more.innerHTML = html;
                 more.hidden = !html;
               }

               function renderRecords() {
                 const search = $("gss-search").value.trim().toLocaleLowerCase();
                 const product = $("gss-product").value;
                 const year = $("gss-year").value;

                 const filtered = sortedIncidents().filter((item) => {
                   const k = kindOf(item);
                   const haystack = [
                     item.title, item.description, item.status,
                     item.product, productName(item.product), KIND_INFO[k].label
                   ].join(" ").toLocaleLowerCase();

                   return (!search || haystack.includes(search)) &&
                     (product === "all" || item.product === product) &&
                     (year === "all" || yearValue(item) === year) &&
                     (kindFilter === "all" || k === kindFilter);
                 });

                 if (!filtered.length) {
                   $("gss-records").innerHTML = `
                     <div class="gss-empty">
                       <strong>لا توجد سجلات مطابقة</strong>
                       جرّب تغيير كلمات البحث أو خيارات التصفية.
                     </div>`;
                   updateMore(0, 0);
                   return;
                 }

                 const shown = filtered.slice(0, visibleCount);
                 updateMore(filtered.length, shown.length);

                 $("gss-records").innerHTML = shown.map((item) => {
                   const k = kindOf(item);
                   const active = isActive(item);
                   const sched = active && !!item.scheduled;
                   const endLabel = item.end ? dateValue(item.end) : (sched ? "غير محدد" : "قيد الإطلاق");
					const startLabel = sched ? (item.scheduledFor || "لم يُحدَّد بعد") : (item.start ? dateValue(item.start) : "لم يسجل تاريخ البدء");
					const spanLabel = sched ? "لم يبدأ الطرح بعد" : active
					  ? "مستمرة منذ " + formatSpan(Date.now() - toDate(item.start).getTime())
					  : duration(item);
                   const url = validURL(item.url);
                   const age = item.start
                       ? (sched ? "أعلن " : active ? "بدأ " : "") + relativeAge(item.end || item.start)
					  : "";
                   const statusTag = active
                     ? `<span class="gss-tag is-live"><span class="gss-pulse"></span>${escapeHTML(item.status || "قيد الإطلاق")}</span>`
                     : `<span class="gss-tag">${escapeHTML(item.status || "غير محدد")}</span>`;

                   return `
                     <article class="gss-record">
                       <div class="gss-record-top">
                         <div>
                           <h4>${escapeHTML(item.title)}</h4>
                           <div class="gss-record-tags">
                             <span class="gss-tag">${escapeHTML(productName(item.product))}</span>
                             <span class="gss-tag is-${k}">${escapeHTML(KIND_INFO[k].label)}</span>
                             ${statusTag}
                           </div>
                         </div>
                       </div>
                       <p>${escapeHTML(item.description || "لا يوجد وصف إضافي لهذا السجل.")}</p>
                       <div class="gss-record-meta">
                         <div>
                           <span class="gss-meta-label">تاريخ البدء</span>
                           <span class="gss-meta-value">${escapeHTML(startLabel)}</span>
                         </div>
                         <div>
                           <span class="gss-meta-label">تاريخ الانتهاء</span>
                           <span class="gss-meta-value">${escapeHTML(endLabel)}</span>
                         </div>
                         <div>
                           <span class="gss-meta-label">المدة المسجلة</span>
                           <span class="gss-meta-value">${escapeHTML(spanLabel)}</span>
                         </div>
                       </div>
                       <div class="gss-record-bottom">
           <span class="gss-meta-label">${escapeHTML(age)}</span>

           <div class="gss-record-links">
             <a class="gss-link" href="${escapeHTML(url)}"
               target="_blank" rel="noopener noreferrer">المصدر الرسمي</a>

             ${
               item.articleUrl
                 ? `<a class="gss-link gss-link-article" href="${escapeHTML(item.articleUrl)}"
                     target="_blank" rel="noopener noreferrer">تغطيتنا</a>`
                 : ""
             }
           </div>
         </div>
                     </article>`;
                 }).join("");
               }

               ["gss-search", "gss-product", "gss-year"].forEach((id) => {
                 $(id).addEventListener(id === "gss-search" ? "input" : "change", () => {
                   visibleCount = RECORDS_INITIAL;
                   renderRecords();
                 });
               });

               $("gss-chips").addEventListener("click", (event) => {
                 const btn = event.target.closest("[data-kind]");
                 if (!btn) return;
                 kindFilter = btn.getAttribute("data-kind");
                 visibleCount = RECORDS_INITIAL;
                 renderChips();
                 renderKindNote();
                 renderRecords();
               });

               $("gss-more").addEventListener("click", (event) => {
                 const btn = event.target.closest("[data-act]");
                 if (!btn) return;
                 if (btn.getAttribute("data-act") === "more") {
                   visibleCount += RECORDS_STEP;
                   renderRecords();
                 } else {
                   visibleCount = RECORDS_INITIAL;
                   renderRecords();
                   const section = $("gss-records-wrap").closest("section");
                   if (section && section.scrollIntoView) section.scrollIntoView({ behavior: "smooth", block: "start" });
                 }
               });

               $("gss-reset").addEventListener("click", () => {
                 $("gss-search").value = "";
                 $("gss-product").value = "all";
                 $("gss-year").value = "all";
                 kindFilter = "all";
                 visibleCount = RECORDS_INITIAL;
                 renderChips();
                 renderKindNote();
                 renderRecords();
               });

               renderLive();
               renderSystems();
               initShare();
               initCalendar();
               renderStats();
               renderChips();
               renderKindNote();
               populateYears();
               renderRecords();

               setInterval(renderLive, 60000);
             })();
