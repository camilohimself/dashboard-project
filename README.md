# 📊 OSOM Dashboard Clients

## 🎯 **Structure du Projet**

Ce repository contient les dashboards interactifs créés par OSOM Digital Agency pour ses clients.

```
Dashboard-Clients/
├── Culture-Peinture/           # Premier dashboard (ROI 140x)
│   ├── DASHBOARD_OSOM_CORPORATE.html
│   ├── CHART_*.js             # Scripts graphiques
│   ├── *.csv                  # Données GA4/Social
│   └── Cera/                  # Fonts personnalisés
├── H-Sechement/               # Security & Recovery Dashboard  
│   ├── dashboard.html         # Dashboard incident piratage
│   ├── *.csv                  # Données GSC/SEMrush
│   └── TIMELINE-PIRATAGE-2025.md
├── _shared/                   # Composants réutilisables
│   ├── base-styles.css        # Styles OSOM
│   └── chart-utils.js         # Utilitaires graphiques
└── README.md                  # Ce fichier
```

## 🚀 **Déploiement Netlify**

### **Configuration Multi-Sites**

Chaque client = Site Netlify séparé :

1. **Culture Peinture**
   - Site: `culture-peinture-dashboard.netlify.app`
   - Base directory: `Culture-Peinture`
   - Build command: (aucune)
   - Publish directory: `.`

2. **H-Sechement**
   - Site: `h-sechement-dashboard.netlify.app`  
   - Base directory: `H-Sechement`
   - Build command: (aucune)
   - Publish directory: `.`

### **Avantages Multi-Sites**
- ✅ URLs propres par client
- ✅ Déploiement indépendant
- ✅ Sécurité (isolation données)
- ✅ Performance optimisée
- ✅ Domaines personnalisés possibles

## 🎨 **Design System OSOM**

### **Couleurs**
- **Primary**: `#FFDD00` (Jaune OSOM)
- **Dark**: `#000000` (Noir OSOM)
- **Success**: `#10B981` (Vert validation)
- **Warning**: `#F59E0B` (Orange attention)
- **Danger**: `#EF4444` (Rouge critique)

### **Typography**
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 600, 700, 800

## 📈 **Clients & Métriques**

### **Culture Peinture**
- **ROI**: 140x supérieur (688 vs 49 conversions)
- **Engagement**: +216% vs direct traffic
- **Social**: 2.4M vues organiques
- **Période**: 6 mois de données

### **H-Sechement**  
- **Incident**: Piratage pages japonaises
- **Résolution**: 48h intervention OSOM
- **Recovery**: 100% trafic légitime préservé
- **Position**: #1 maintenue sur "assèchement"

## 🛠 **Technologies**

- **Charts**: Chart.js 4.4.0
- **Styles**: CSS Custom Properties + Grid/Flexbox
- **JavaScript**: Vanilla ES6+ 
- **Fonts**: Inter + CeraPRO (local)
- **Build**: Statique (HTML/CSS/JS)

## 📁 **Ajout Nouveau Client**

1. **Créer dossier** : `Nouveau-Client/`
2. **Copier template** : Adapter `H-Sechement/dashboard.html`
3. **Données client** : Ajouter CSV/JSON dans dossier
4. **Netlify setup** : Nouveau site avec base directory
5. **Deploy** : Push = déploiement automatique

## 🎯 **Objectifs Business**

- **Démonstration ROI** : Preuves visuelles impact OSOM
- **Case Studies** : Portfolio de réussites clients
- **Différenciation** : Dashboards vs rapports PDF statiques
- **Acquisition** : Outil de closing prospects
- **Rétention** : Transparence totale pour clients existants

---

*Créé par OSOM Digital Agency - Expertise SEO, Sécurité Web & Analytics*