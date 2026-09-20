# قاعدة البيانات المحلية

المشروع يستخدم MariaDB/MySQL محليًا عند ضبط `LOCAL_DB_ENABLED=true`.

1. أنشئ خادم MariaDB محليًا وأنشئ مستخدمًا لديه صلاحية إنشاء قاعدة بيانات.
2. راجع قيم `LOCAL_DB_*` في ملف `.env`.
3. شغّل الاستيراد:

```bash
npm run db:import
```

يقرأ السكربت ملفات SQL من `DB_DATA_DIR`، ينشئ قاعدة `montutravel` والجداول، ثم يستورد الرحلات والمدن والتصنيفات والعلاقات والمراجعات والمشتريات والرسائل والإشعارات. يمكن تغيير مكان الملفات دون نسخ بيانات المستخدمين إلى المستودع عبر تعديل `DB_DATA_DIR`.

للتأكد من الاتصال:

```sql
USE montutravel;
SELECT COUNT(*) FROM trips;
SELECT COUNT(*) FROM cities;
SELECT COUNT(*) FROM categories;
```
