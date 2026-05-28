const AC_DATA = {
  "AC1101": {
    code: "AC11.01",
    title: "Maîtriser les lois fondamentales de l'électricité afin d'intervenir sur des équipements de réseaux et télécommunications",
    fait: "Dans le cadre de la ressource R1.04 (Fondamentaux des systèmes électroniques), j'ai étudié les lois de base de l'électricité appliquées aux équipements réseaux : la loi d'Ohm, les lois des mailles, les notions de tension, courant et résistance. J'ai également manipulé des composants électroniques lors des travaux pratiques et appris à mesurer des grandeurs électriques avec un multimètre.",
    pourquoi: "La compréhension des principes électriques est indispensable pour tout technicien réseau et télécoms. Intervenir sur des équipements (routeurs, switchs, câblage structuré) sans maîtriser ces bases peut entraîner des dommages matériels ou des risques pour la sécurité. Cette ressource fondamental au BUT R&T.",
    comment: "J'ai suivi les cours magistraux de la ressource R1.04. Les travaux pratiques m'ont permis de manipuler du matériel réel (multimètres, générateurs de signal). Les cours de R1.13 (Mathématiques du signal) et R1.14 (Mathématiques des transmissions) ont apporté les bases mathématiques complémentaires nécessaires. De plus j’ai travaillé sur les maquettes lors des pauses du midi.",
    difficultes: "Les notions d'impédance complexe et de circuits RLC ont été difficiles à comprendre. La mise en pratique avec les instruments de mesure a parfois été délicate en raison de la précision requise.",
    appris: "J'ai acquis les bases de l'électricité appliquées au domaine des télécommunications : loi d'Ohm, lois des mailles, notion de puissance électrique, courant alternatif et continu. Ces connaissances m'ont permis de mieux comprendre le fonctionnement des équipements télécomunications.",
    autrement: "J'établirais des fiches de révision sur chaque loi fondamentale dès le début du semestre. Je regarderai également plus de vidéos pour renforcer ma compréhension des circuits électroniques.",
    preuve: "<img src='assets/img/ac/ac1101.png' class='img-fluid rounded shadow-sm' alt='Preuve AC11.01'>",
  },
  "AC1102": {
    code: "AC11.02",
    title: "Comprendre l'architecture et les fondements des systèmes numériques, les principes du codage de l'information, des communications et de l'Internet",
    fait: "À travers la ressource R1.06 (Architecture des systèmes numériques et informatiques) et R1.02 (Principes et architecture des réseaux), j'ai étudié l'architecture des ordinateurs, les systèmes de codage de l'information (binaire, hexadécimal, UTF-8), les modèles OSI et TCP/IP, ainsi que les fondamentaux des protocoles de communication réseau (Ethernet, IP, TCP, UDP, DNS, DHCP).",
    pourquoi: "Comprendre comment l'information est codée et transmise est essentiel pour travailler dans le domaine des réseaux et télécommunications. Ces connaissances permettent de configurer, analyser ou dépanner un réseau.",
    comment: "J'ai suivi les cours de R1.02 et R1.06 avec leurs TD associés. En R1.02, j'ai utilisé Packet Tracer pour visualiser les échanges de trames. La ressource R1.01 (Initiation aux réseaux) m'a également permis de faire de l'adressage IPv4, de DHCP et de DNS en travaux pratiques. La certification CCNA Switchign and Routing m’a fortement aidé.",
    difficultes: "Les différentes couches du modèle OSI et de l'encapsulation des données à chaque couche a été difficle. La distinction entre adresses MAC et adresses IP, et leur rôle respectif dans la communication a été une autre difficulté. La conversion entre bases numériques (binaire, hexadécimal) a été compliqué à comprendre lors des premiers exercices.",
    appris: "Je maîtrise désormais les principaux protocoles réseaux (ARP, ICMP, DNS, DHCP, HTTP, TCP, UDP), le codage de l'information en binaire et hexadécimal, ainsi que le fonctionnement de l'adressage IPv4 avec des sous-réseaux . Ces bases m'ont permis d'aborder sereinement le semestre 2 avec R2.01 (Technologie de l'Internet) notamment sur les sous-réseaux lors de l’adressage IPv4.",
    autrement: "Je commencerais par pratiquer les exercices de conversion de base numérique pour gagner en fluidité notamment sur l’adressage IPv4, j’aurais pu anticiper l’apprentissage des différentes couches du modèle OSI.",
    preuve: "<a href='pdf/TP2.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : pdf TP2</a>",
  },
  "AC1103": {
    code: "AC11.03",
    title: "Configurer les fonctions de base du réseau local",
    fait: "Via les ressources R1.01, R1.03 (Réseaux locaux et Équipements actifs) et la SAE1.02, j'ai configuré des réseaux locaux en utilisant des switchs, des routeurs et des serveurs DNS/DHCP. En SAE1.02, j'ai réalisé en groupe une maquette réseau complète : schéma d'installation, simulation sous Packet Tracer, puis déploiement réel sur machines virtuelles avec, DNS et DHCP fonctionnels.",
    pourquoi: "La configuration d'un réseau local est l’une des compétences les plus importantes d'un technicien réseau. Sans cette pratique, les connaissances théoriques ne seraient pas suffisantes. Les SAE ont pour objectif de mettre en œuvre concrètement ces configurations dans des situations proches du milieu professionnel.",
    comment: "J'ai utilisé Packet Tracer pour la simulation, puis des machines virtuelles sous VirtualBox pour le déploiement réel (SAE1.02 séances 4). Les outils utilisés incluent : draw.io pour les schémas réseau, Jupyter Notebook pour la documentation, les commandes Linux (ip, ping). Les cours R1.01, R1.02 et R1.03 ont fourni les compétences nécessaires pour le bon déroulement de la SAE.",
    difficultes: "La configuration de serveurs DHCP et DNS sous Linux a été complexe surtout avec les fichiers de configuations. La gestion des adresses IP a également posé des problèmes lors des premiers TPs.",
    appris: "Je suis capable de configurer un réseau local simple : adressage IP statique et dynamique (DHCP), résolution de noms (DNS), routage de base entre sous-réseaux, installation d'un serveur web. La SAE1.02 m'a appris à planifier un projet (diagramme de Gantt), à simuler avant de passer à une configuration en réel.",
    autrement: "Je consacrerais plus de temps à la phase de simulation avant le déploiement réel pour anticiper les problèmes. Je ferai des comptes-rendus lors des TPs et non chez moi afin de revoir facilement les étapes en cas de problème.",
    preuve: "<img src='assets/img/ac/ac1103.png' class='img-fluid rounded shadow-sm' alt='Preuve AC11.03'>",
  },
  "AC1104": {
    code: "AC11.04",
    title: "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation afin d'interagir avec ceux-ci pour la configuration et l'administration des réseaux et services fournis",
    fait: "Dans les ressources R1.08 (Base des systèmes d'exploitation) et R2.02 (Administration système et fondamentaux de la virtualisation), j'ai étudié et manipulé les systèmes d'exploitation Windows et Linux. En S1, j'ai réalisé des TPs sur la gestion des fichiers, les droits, les processus. En S2, j'ai approfondi l'administration système (gestion des utilisateurs, services, partages) et la virtualisation avec VirtualBox, VMware ESXi et Docker.",
    pourquoi: "Les systèmes d'exploitation sont la couche logicielle sur laquelle reposent tous les services réseau. Savoir administrer Linux et Windows est obligatoire pour configurer des serveurs, gérer des droits d'accès, démarrer/arrêter des services et maintenir une infrastructure réseau.",
    comment: "En R1.08, j'ai pratiqué en ligne de commande Linux : commandes de gestion des fichiers (ls, cp, mv, chmod, chown), de recherche (find, grep), de traitement (head, tail, cut, sort, uniq), et de gestion des processus (kill). En R2.02, j'ai utilisé VirtualBox pour créer des VMs Windows et Linux, VMware ESXi pour la virtualisation de niveau entreprise, et Docker pour la conteneurisation.",
    difficultes: "La ligne de commande Linux a été difficile au début car je ne l’avais jamais utilisé, surtout pour la gestion des permissions (chmod). La compréhension des concepts de virtualisation (hyperviseur type 1 vs type 2, réseaux virtuels) a demandé du temps. La configuration de Docker a été particulièrement compliqué à comprendre.",
    appris: "Je suis capable de naviguer dans un système Linux en ligne de commande, de gérer les droits sur les fichiers, les processus et les services. J'ai appris à créer et configurer des machines virtuelles sous VirtualBox et ESXi, et à utiliser Docker pour déployer des applications conteneurisées. Ces compétences ont été directement réutilisées dans la SAE2.03 pour l'hébergement du site web Flask.",
    autrement: "Je pratiquerais la ligne de commande Linux sur mon propre pc, pour automatiser les gestes. Je créerais un mémo plus tôt pour les commandes les plus utilisées, ce qui m'aurait été utile lors des contrôles de TP.",
    preuve: "<a href='pdf/R202-TP.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : R202-TP</a>",
  },
  "AC1105": {
    code: "AC11.05",
    title: "Identifier les dysfonctionnements du réseau local et savoir les signaler",
    fait: "Lors des TPs de R1.01, R1.03 et R2.01, j'ai pratiqué le diagnostic réseau à l'aide de commandes et d'outils d'analyse. Dans la SAE1.01 (Se sensibiliser à l'hygiène informatique et à la cybersécurité), j'ai également appris à identifier des comportements anormaux sur un réseau notamment grâce au MOOC de l’ANSSI et L’introduction à la cybersecurité sur Cisco. En R2.01, les TPs sur le filtrage (ACL Cisco, iptables Linux) m'ont permis d'analyser et de corriger des problèmes de connectivité.",
    pourquoi: "Savoir diagnostiquer un dysfonctionnement réseau est une compétence importante d'un technicien réseau. Il est essentiel de pouvoir identifier rapidement un problème (matériel, configuration, protocole).",
    comment: "J'ai utilisé les commandes réseau : ping (test de connectivité), ip a / ifconfig (configuration des interfaces) et Wireshark pour l'analyse de trames. Grâce au MOOC de l'ANSSI de la SAE 1.01 sur la cybersécurité, qui aborde la détection d'anomalies réseau.",
    difficultes: "L'interprétation des captures Wireshark a été difficile au début, les informations sont trop nombreuses et techniques.",
    appris: "J'ai appris le diagnostic par couches : vérifier d'abord la connectivité physique, puis la couche réseau (ping), puis les services (DNS, DHCP). Je sais utiliser Wireshark pour analyser des échanges réseau et identifier des anomalies de protocoles. La SAE1.01 m'a également sensibilisé aux bonnes pratiques de sécurité informatique.",
    autrement: "Je mettrais en place des pannes volontaires pour m'entraîner au diagnostic.",
    preuve: "<img src='assets/img/ac/ac1105.png' class='img-fluid rounded shadow-sm' alt='Preuve AC11.05'>",
  },
  "AC1106": {
    code: "AC11.06",
    title: "Installer un poste client, expliquer la procédure mise en place",
    fait: "Lors des premiers TPs de R1.01, j'ai réalisé l'installation et la configuration d'un poste client puis de petits réseaux pour permettre au poste client de communiquer dans le réseau notamment grâce à Packet Tracer. En R2.02, j'ai approfondi en créant des machines virtuelles complètes sous VirtualBox et en les configurant comme postes clients ou serveurs lors des Tps sur l’administration système.",
    pourquoi: "L'installation et la configuration d'un poste client est courant dans un service informatique. Savoir expliquer la procédure est aussi important que de savoir la réaliser, car cela permet de transmettre les bonnes pratiques.",
    comment: "J'ai suivi les TPs guidés de R1.01 (TP1 : environnement numérique IUT, TP2 : Windows, TP3 : Linux). En R2.02, j'ai créé des VMs avec VirtualBox selon les cours de virtualisation. La rédaction de compte-rendus de TP m'a contraint à expliquer et justifier chaque étape de la procédure, ce qui a renforcé ma compréhension des différents sujets.",
    difficultes: "La partition du disque dur et les paramètres d'amorçage lors d'une installation ont été complexes. La configuration réseau d'une VM (modes bridge, NAT, réseau interne) m’a induit en erreur mais cela m’a permis de comprendre les différences.",
    appris: "Je suis capable d'installer et configurer un poste client sous Windows et Linux, de configurer son accès à un réseau, d'installer les logiciels nécessaires et de rédiger un compte-rendu clair. La pratique de la virtualisation m'a appris à créer des environnements isolés et à comprendre les différents modes de réseau virtuel.",
    autrement: "Je rédigerais la procédure d'installation au fur et à mesure, en temps réel, plutôt que de la reconstituer après coup. J'utiliserais des captures d’écran de VMs pour pouvoir revenir à un état stable en cas d'erreur de manipulation.",
    preuve: "<a href='pdf/TP8.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : TP8</a>",
  },
  "AC1201": {
    code: "AC12.01",
    title: "Mesurer, analyser et commenter les signaux",
    fait: "Dans le cadre de la ressource R1.05 (Supports de transmission pour les réseaux) et de la SAE1.03 (Découvrir un dispositif de transmission), ainsi que de la SAE2.02 (Mesurer et caractériser un signal ou un système) en S2, j'ai mesuré, analysé des signaux électriques et des fréquences.",
    pourquoi: "La mesure et l'analyse des signaux sont fondamentales pour comprendre les transmissions dans les télécommunications. Sans ceci il est impossible de diagnostiquer des problèmes de transmission, d'optimiser la qualité de service.",
    comment: "En SAE1.03, j'ai découvert un dispositif de transmission et utilisé des instruments de mesure (oscilloscope, générateur basse fréquence). Les cours R1.13 (Mathématiques du signal) et R1.14 (Mathématiques des transmissions) ont fourni les bases nécessaires (représentation fréquentielle).",
    difficultes: "L'utilisation de l'analyseur de spectre a été complexe au départ en raison des nombreux paramètres à régler (span, résolution, niveau de référence). L'interprétation des spectres de signaux a nécessité de faire le lien entre la et la pratique ce qui a été assez difficile. La partie Matlab/Simulink pour le filtrage numérique a demandé l’apprentissage de logiciels que je n’avais encore jamais utilisés.",
    appris: "Je sais mesurer et interpréter des signaux dans les domaines temporel et fréquentiel. J'ai appris à utiliser un analyseur de spectre pour caractériser des signaux, et à réaliser un filtrage numérique basique.",
    autrement: "Je réaliserais des mesures sur plus de types de signaux différents pour mieux comprendre les différents cas. Je prendrais plus de captures d'écran et de mesures annotées pendant les séances pour enrichir le compte-rendu final.",
    preuve: "<a href='pdf/TPR105.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : TPR105</a>",
  },
  "AC1202": {
    code: "AC12.02",
    title: "Caractériser des systèmes de transmissions élémentaires et découvrir la modélisation mathématique de leur fonctionnement",
    fait: "À travers la SAE1.03 (Découvrir un dispositif de transmission), les cours R1.05 (Supports de transmission), R1.13 (Mathématiques du signal) et R1.14 (Mathématiques des transmissions), j'ai caractérisé des systèmes de transmission : étude des supports (câble cuivre, fibre optique, transmission sans fil), modélisation de leur comportement en fréquence, calcul de bande passante et d'atténuation.",
    pourquoi: "Comprendre les systèmes de transmission est essentiel pour choisir le bon support selon les besoins (débit, distance, environnement). La modélisation mathématique permet de quantifier les performances et d'anticiper les limites des supports.",
    comment: "J'ai utilisé les cours de R1.05 (câbles, fibres, ondes radio) pour la théorie, et R2.05 (Signaux et systèmes pour les transmissions) en S2 pour approfondir la modélisation. Les outils mathématiques des ressources R1.13 et R1.14 (transformées de Fourier, filtres) m'ont permis de modéliser le comportement des systèmes de transmission.",
    difficultes: "La représentation mathématique des systèmes de transmission (fonctions de transfert, diagrammes de Bode) a été difficile à maîtriser.",
    appris: "Je comprends les caractéristiques des principaux supports de transmission (câble UTP, fibre optique, Wi-Fi) et leurs limites en termes de bande passante et d'atténuation.",
    autrement: "Je commencerais par des exemples concrets (mesure sur un vrai câble). Je mettrais les cours de mathématiques et les TPs de transmission en application dès le début pour faire le lien entre théorie et pratique.",
    preuve: "<a href='pdf/SAE103.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : SAE103</a>",
  },
  "AC1203": {
    code: "AC12.03",
    title: "Déployer des supports de transmission",
    fait: "Dans le cadre de la ressource R1.05 (Supports de transmission pour les réseaux) et lors des TPs pratiques de R1.03 (Réseaux locaux et Équipements actifs), j'ai appris à identifier, préparer et déployer différents types de supports de transmission : câbles RJ45 pour Ethernet, câblage structuré (réalisation de schémas), notions sur la fibre optique. En SAE1.02, le déploiement d’un réseau m'a amené à utiliser des câbles réseau dans un environnement physique.",
    pourquoi: "Le déploiement physique des supports de transmission est une compétence indispensable pour un technicien réseau. Même si les infrastructures sont de plus en plus virtualisées, le câblage physique reste la importants pour tout réseau d'entreprise.",
    comment: "J'ai suivi les cours et TPs de R1.05 et de R1.03. Les travaux pratiques m'ont permis de manipuler des câbles RJ45, et d'assembler des baies de brassage. La SAE1.03 (Découvrir un dispositif de transmission) a complété cet apprentissage par une étude approfondie d'un support de transmission.",
    difficultes: "Le respect du câblage a demandé de la rigueur. La compréhension des différences entre catégories de câbles (cat5e, cat6, cat6a) et leurs applications a nécessité beaucoup de révisions.",
    appris: "Je suis capable d’utiliser des câbles réseau RJ45, d'identifier les caractéristiques des différents supports de transmission (débit, portée).",
    autrement: "Je pratiquerais plus souvent sur les baies dans le bâtiment J pour gagner en rapidité. J'établirais un plan de câblage pour éviter les erreurs.",
    preuve: "<a href='pdf/TP1R105.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : TP1R105</a>",
  },
  "AC1204": {
    code: "AC12.04",
    title: "Connecter les systèmes de ToIP",
    fait: "Dans la ressource R2.04 (Initiation à la téléphonie d'entreprise) au semestre 2, j'ai découvert et mis en pratique la téléphonie sur IP (ToIP). J'ai étudié les protocoles de signalisation (SIP) et de transport de la voix (RTP), la notion de codec audio. Les TDs m'ont permis d'appliquer ces concepts sur des exercices pratiques.",
    pourquoi: "La ToIP est devenue le standard des communications d'entreprise. Un technicien réseau doit savoir déployer et configurer des systèmes de téléphonie IP pour répondre aux besoins des entreprises.",
    comment: "J'ai suivi le cours complet de R2.04 et réalisé les 4 TDs en revoyant leurs corrections. Les TPs du module ont permis la mise en pratique sur des équipements et logiciels de ToIP.",
    difficultes: "La configuration du serveur a été difficile car une seule erreur de frappe fait dysfonctionner le serveur et donc aucun appel n’est possible. La notion de QoS et de priorisation du trafic voix par rapport aux données m'ont demandé beaucoup de travail pour être comprises.",
    appris: "Je comprends le fonctionnement d'un système de ToIP : le rôle des protocoles SIP et RTP, les différents codecs et leur impact sur la qualité et la bande passante. J'ai également appris l'importance de la QoS pour garantir la qualité des communications vocales sur un réseau IP.",
    autrement: "Je réaliserais plus de captures Wireshark sur des échanges SIP/RTP pour visualiser les échanges de signalisation et comprendre le déroulement d'un appel ToIP. Je referai la configuration d’Asterisk pour acquérir une expérience pratique plus solide.",
    preuve: "<a href='pdf/TPR204.pdf' target='_blank' class='btn btn-outline-primary btn-sm mt-2'><i class='fas fa-file-pdf me-1'></i>Voir le PDF : TPR204</a>",
  },
  "AC1205": {
    code: "AC12.05",
    title: "Communiquer avec un tiers (client, collaborateur...) et adapter son discours et sa langue à son interlocuteur",
    fait: "Avec les ressources R1.11/R211 (Communication), R.112 (PPP : Connaître son champ d'activité) et les cours de Communication/PPP/vie de l'entreprise, j'ai développé mes compétences en communication. J'ai réalisé des présentations orales lors des soutenances des SAEs (SAE1.02 questions orales), mais aussi en amphithéâtre devant toute une promo.",
    pourquoi: "La communication est une compétence essentielle dans un environnement professionnel. Un technicien réseau doit savoir expliquer des concepts techniques à des interlocuteurs non spécialistes, notamment des clients.",
    comment: "J'ai participé aux cours de communication (R1.11) et de PPP (présentation professionnelle, connaissance du secteur R&T). Lors des SAEs j’ai répondu à des questions techniques devant un jury (SAE1.02). La rédaction de comptes-rendus de TP en PDF m'a formé à la communication écrite technique. Les cours d'Anglais ont développé mes capacités à communiquer dans la langue native du réseau.",
    difficultes: "La prise de parole en public lors des soutenances procure du stress. Vulgariser des concepts techniques pour des interlocuteurs non spécialistes sans perdre en rigueur est un exercice difficile. La rédaction de comptes-rendus structurés et clairs a demandé des efforts de synthèse.",
    appris: "J'ai progressé dans la communication orale (présentations, réponses aux questions) et écrite (comptes-rendus, documentation). J'ai appris à adapter mon niveau de langage selon l'interlocuteur. Le travail en groupe lors des SAEs m'a appris à répartir les tâches.",
    autrement: "Je m'entraînerais davantage à l'oral en simulant des présentations devant mes camarades avant les soutenances.",
    preuve: "",
  },
  "AC1301": {
    code: "AC13.01",
    title: "Utiliser un système informatique et ses outils",
    fait: "Via R1.07 (Fondamentaux de la programmation), R1.08 (Base des systèmes d'exploitation) et R1.09 (Introduction aux technologies Web), j'ai utilisé des outils informatiques : Visual Studio Code, Jupyter Notebook, le terminal Linux, GitHub. La maîtrise des outils informatiques est un prérequis pour l'administration réseau. Sans savoir utiliser un logiciel de développement, un terminal, il est impossible de travailler efficacement dans un service informatique.",
    pourquoi: "",
    comment: "J'ai utilisé Visual Studio Code pour le code Python (R1.07) et HTML/CSS (R1.09, SAE1.04). Jupyter Notebook a été utilisé pour les TPs de R1.07 et la documentation de la SAE1.02 (format Markdown). Le terminal Linux (R1.08) a été pratiqué intensivement pour les commandes de base. GitHub a été utilisé pour héberger le site portfolio de la SAE1.04.",
    difficultes: "Les différents outils à apprendre simultanément logiciel de développement, terminal, Jupyter, Git) a été déstabilisante au départ. La configuration du proxy réseau de l'IUT pour certains outils (pip, git) a également causé des difficultés à cause du manque de reflexes.",
    appris: "Je suis à l'aise avec Visual Studio Code, Jupyter Notebook, le terminal Linux et les commandes GitHub de base (add, commit, push, pull, clone). Je sais naviguer dans un terminal. Ces compétences ont été indispensables pour toutes les SAEs.",
    autrement: "Je donnerai plus du temps à la configuration d'un environnement de développement sur mon pc dès le début du semestre (VS Code, Git, Python, virtualenv).",
    preuve: "<img src='assets/img/ac/ac1301.png' class='img-fluid rounded shadow-sm' alt='Preuve AC13.01'>",
  },
  "AC1302": {
    code: "AC13.02",
    title: "Lire, exécuter, corriger et modifier un programme",
    fait: "Dans la ressource R1.07 (Fondamentaux de la programmation), j'ai progressivement appris à lire, comprendre, exécuter, corriger et modifier des programmes Python 3. En S2, la ressource R2.08 (Analyse et traitement de données structurées) a continué cet apprentissage.",
    pourquoi: "Savoir lire et modifier du code existant est une compétence primordiale dans un service informatique. Dans la plupart des cas, on adapte et corrige des programmes existants. La programmation Python est particulièrement pertinente en R&T pour l'automatisation des tâches réseau.",
    comment: "J'ai réalisé l'ensemble des TPs de R1.07 avec Visual Studio Code et Jupyter Notebook. Les corrections de TP déposées sur Moodle m'ont permis d'analyser les différentes approches possibles pour un même problème. Les contrôles TP m’ont forcé à mémoriser et à comprendre le code plutôt que de le copier. La programmation Bash en R1.08 (TP6) a élargi mes compétences à un autre langage de script.",
    difficultes: "J’ai eu beaucoup de difficultés à commencer à écrire mon code, j’avais un blocage dès que je voulais écrire un code je ne savais pas par où commencer. C’est pour cela que j’ai passer PE1, afin de surmonter mes difficultés",
    appris: "Je maîtrise les fondamentaux de Python : variables, types, conditions, boucles, listes, dictionnaires, fonctions, fichiers, et les modules de base. Je sais lire un programme inconnu et en comprendre la logique, identifier des bugs. Les TPs réseau (scan de ping, analyse d'adresses IP) m'ont montré l'application directe de la programmation au domaine des réseaux.",
    autrement: "Je pratiquerais la programmation en dehors des TPs sur des exercices supplémentaires. Je commenterais systématiquement mon code dès le début pour développer une bonne habitude de documentation.",
    preuve: "<img src='assets/img/ac/ac1302.png' class='img-fluid rounded shadow-sm' alt='Preuve AC13.02'>",
  },
  "AC1303": {
    code: "AC13.03",
    title: "Traduire un algorithme, dans un langage et pour un environnement donné",
    fait: "En R1.08, j'ai traduit des algorithmes en scripts Bash (TP6 : programmer en Bash). La SAE1.05 (Traiter des données) a nécessité de concevoir des algorithmes de traitement et visualisation de données.",
    pourquoi: "La traduction d'algorithmes, c'est tout simplement la capacité à transformer une idée ou une recette en instructions que l'ordinateur peut exécuter. La traduction, c'est réécrire ces étapes dans un langage que la machine comprend, comme Python ou JavaScript, ça sert à automatiser des tâches répétitives. Par exemple : au lieu de vérifier manuellement chaque jour si un serveur fonctionne bien, on écrit un petit programme qui le fait automatiquement et envoie une alerte si quelque chose cloche.",
    comment: "J'ai suivi la ressource R1.07 : d'abord des algorithmes simples (calculs, conversions), puis des algorithmes sur les structures de données (listes, dictionnaires).",
    difficultes: "La phase de conception d’un algorithme (avant le codage) était souvent négligée. Le choix de la structure de données adaptée (liste, dictionnaire) n'était pas toujours intuitif au début.",
    appris: "J'ai appris à décomposer un problème en étapes avant de coder, à choisir les structures de données adaptées, et à developper des algorithmes de traitement de données en Python. La SAE1.05 m'a appris à travailler en équipe sur un projet, à utiliser GitHub pour le travail d’équipe et à présenter des résultats sous forme de visualisations.",
    autrement: "Je testerais mon code avec des cas limites dès la conception pour éviter les bugs lors des évaluations.",
    preuve: "",
  },
  "AC1304": {
    code: "AC13.04",
    title: "Connaître l'architecture et les technologies d'un site Web",
    fait: "La ressource R1.09 (Introduction aux technologies Web) m'a appris les fondamentaux HTML, CSS, le responsive design avec Bootstrap et le protocole HTTP. La SAE1.04 (Se présenter sur Internet) m'a permis de créer un site web personnel (Présentation, CV, Portfolio) hébergé sur GitHub Pages. En R2.09 (Initiation au développement Web) j’ai approfondi ces connaissances avec Flask (Python backend), les failles XSS et injections SQL.",
    pourquoi: "Les technologies web sont très présentes dans les services informatiques avec notamment les interfaces d'administration réseau. Comprendre l'architecture d'un site web (client/serveur, HTML/CSS/JS, backend, base de données) est indispensable pour un technicien.",
    comment: "Pour la SAE1.04, j'ai utilisé un template Bootstrap, modifié avec VS Code, puis hébergé sur GitHub Pages. En R1.09, j'ai réalisé des TPs HTML et CSS. Le R2.09 m'a appris à utiliser à Flask, MySQL, et les TPs ont inclus la création d'une application web dynamique avec système d'authentification. Le cours R2.03 (Services réseaux) a complété ceci avec Apache/Nginx.",
    difficultes: "La compréhension de Flask a été complexe au début.",
    appris: "Je maîtrise les bases du développement web : HTML, CSS, responsive design Bootstrap, protocole HTTP (requêtes/réponses, codes de statut). J'ai créé un site portfolio personnel hébergé en ligne sur GitHub Pages. Au S2, j'ai appris à développer une application web dynamique avec Flask, à interagir avec une base de données et à sécuriser une application web lors du TP4 de R2.09.",
    autrement: "J’organiserai mieux mon code dès le départ pour avoir moins de mal à chercher dans mon HTML.",
    preuve: "",
  },
  "AC1305": {
    code: "AC13.05",
    title: "Choisir les mécanismes de gestion de données adaptés au développement de l'outil et argumenter ses choix",
    fait: "Dans les ressources R2.07 (Sources de données) au semestre 2, j'ai étudié les systèmes de gestion de bases de données relationnelles (PostgreSQL, MySQL) et le langage SQL. La SAE2.03 (Mettre en place une solution informatique pour l'entreprise) m'a conduit à concevoir une base de données pour un site dynamique Flask, en choisissant entre MySQL et PostgreSQL.",
    pourquoi: "Le stockage des données est au cœur de toute application informatique. Concevoir un schéma de base de données et écrire des requêtes SQL est une compétence fondamentale.",
    comment: "En R2.07, j'ai appris la conception de BDD relationnelles et le SQL (CREATE, SELECT, INSERT, UPDATE, DELETE, jointures) avec PostgreSQL lors des TPs. Pour la SAE2.03, j'ai créé un fichier database.sql définissant la structure de la BDD du site, j’ai du configuer Docker Compose avec un conteneur MySQL/PostgreSQL et un conteneur Flask.",
    difficultes: "La conception du schéma de la base de données (identification des entités, des relations, de la bonne normalisation) a été complexe. La gestion des relations entre tables (clés étrangères, jointures) dans les requêtes SQL a posé des problèmes.",
    appris: "Je sais concevoir un schéma de base de données relationnelle, écrire des requêtes SQL, et intégrer une BDD dans une application web Flask.",
    autrement: "Je commencerais par concevoir et valider le schéma de la BDD sur papier (diagramme UML) avant de le faire sur ma machine, pour éviter de restructurer la base en cours de développement.",
    preuve: "<img src='assets/img/ac/ac1305.png' class='img-fluid rounded shadow-sm' alt='Preuve AC13.05'>",
  },
  "AC1306": {
    code: "AC13.06",
    title: "S'intégrer dans un environnement propice au développement et au travail collaboratif",
    fait: "Tout au long des semestres 1 et 2, j'ai utilisé les outils de travail collaboratif. En R1.07, j'ai utilisé GitLab de l'université pour gérer les versions de mes programmes Python. Avec la SAE1.04 j’ai héberger mon portfolio sur GitHub. Pour la SAE1.05 (Traiter des données)nous avons dur faire un travail en équipe de 2 sur GitLab, pour voir l’avancement du projet.",
    pourquoi: "Le travail collaboratif est courant informatique. GitHub est l'outil le plus souvent utilisé. S'y former dès la première année de BUT est essentiel pour être prêt en stage l’année prochaine. Un outil comme GitHub permet de conserver un historique du travail et de travailler en parallèle sur le même projet.",
    comment: "Pour la SAE1.05, nous avons utilisé GitHub pour intégrer le travail individuel. Pour la SAE1.02, nous avons travaillé avec un diagramme de Gantt (draw.io, OnlineGantt) et Jupyter Notebook pour la documentation.",
    difficultes: "L’interface de GitHub a été difficile à prendre en main au début, se repérer était assez complexe.",
    appris: "Je suis capable de travailler en équipe sur un dépôt partagé. J'ai appris à rédiger des messages de commit clairs. Ces compétences sont directement applicables dans le monde professionnel.",
    autrement: "Je serai plus précis lors de mes premiers commits dès le début de chaque projet collaboratif.",
    preuve: "<img src='assets/img/ac/ac1306.png' class='img-fluid rounded shadow-sm' alt='Preuve AC13.06'>",
  },
};


function showACDetail(acId) {
  const d = AC_DATA[acId];
  if (!d) return;
  const m = document.getElementById('acDetailModal');
  m.querySelector('.ac-code').textContent = d.code;
  m.querySelector('.ac-title').textContent = d.title;
  
  const sections = [
    {key:'fait', icon:'fa-tasks', label:'Ce que j\'ai fait'},
    {key:'pourquoi', icon:'fa-question-circle', label:'Pourquoi je l\'ai fait'},
    {key:'comment', icon:'fa-cogs', label:'Comment je l\'ai fait'},
    {key:'difficultes', icon:'fa-exclamation-triangle', label:'Mes difficultés'},
    {key:'appris', icon:'fa-lightbulb', label:'Ce que j\'en ai appris'},
    {key:'autrement', icon:'fa-redo', label:'Ce que je ferais autrement'},
  ];
  
  let html = '';
  sections.forEach(s => {
    if (d[s.key]) {
      html += `<div class="mb-4">
        <h6 class="fw-bold text-primary"><i class="fas ${s.icon} me-2"></i>${s.label}</h6>
        <p class="text-muted" style="text-align:justify;line-height:1.7">${d[s.key]}</p>
      </div>`;
    }
  });
  
  if (d.preuve) {
    html += `<div class="mb-3 p-3 bg-light rounded" style="text-align:left">
      <h6 class="fw-bold"><i class="fas fa-folder-open me-2 text-success"></i>Preuve</h6>
      <div class="text-center mt-2">${d.preuve}</div>
    </div>`;
  }
  
  m.querySelector('.ac-body-content').innerHTML = html;
  
  // Prevent click propagation on links (PDF buttons, etc.) inside the modal
  m.querySelectorAll('.ac-body-content a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
  
  // Cleanly close parent modal and open AC detail modal
  const portfolioEl = document.getElementById('portfolioModal3');
  const parentModal = bootstrap.Modal.getInstance(portfolioEl);
  if (parentModal && portfolioEl.classList.contains('show')) {
    const onHidden = () => {
      bootstrap.Modal.getOrCreateInstance(m).show();
      portfolioEl.removeEventListener('hidden.bs.modal', onHidden);
    };
    portfolioEl.addEventListener('hidden.bs.modal', onHidden);
    parentModal.hide();
  } else {
    bootstrap.Modal.getOrCreateInstance(m).show();
  }
}

// Re-open portfolio modal when AC detail modal is closed
document.addEventListener('DOMContentLoaded', () => {
  const acModal = document.getElementById('acDetailModal');
  if (acModal) {
    acModal.addEventListener('hidden.bs.modal', () => {
      const portfolioEl = document.getElementById('portfolioModal3');
      if (portfolioEl) {
        bootstrap.Modal.getOrCreateInstance(portfolioEl).show();
      }
    });
  }
});
