# TruePass---Decentralized-Ticketing-System


File Structure:
/decentralized-ticketing-system
│── /backend
│   │── /config             # Database & environment configs
│   │── /controllers        # Business logic
│   │── /models             # MongoDB schemas
│   │── /routes             # API routes
│   │── /services           # Helper functions (TOTP, Aadhaar, Web3 interactions)
│   │── /utils              # Common utilities (validators, middlewares)
│   │── /tests              # Backend tests
│   │── server.js           # Main Express server
│   │── .env                # Environment variables
│   └── package.json        # Backend dependencies
│
│── /blockchain
│   │── /contracts          # Solidity smart contracts
│   │── /migrations         # Deployment scripts
│   │── /scripts            # Automation scripts
│   │── /test               # Smart contract tests
│   │── hardhat.config.js   # Hardhat config
│   └── package.json        # Blockchain dependencies
│
│── /frontend
│   │── /public             # Static assets
│   │── /src
│   │   │── /assets         # Images, fonts, etc.
│   │   │── /components     # Reusable UI components
│   │   │── /pages          # Page-level components
│   │   │── /hooks          # Custom React hooks (e.g., Web3, Auth)
│   │   │── /contexts       # Global state management (React Context)
│   │   │── /services       # API calls (Aadhaar, TOTP, Blockchain)
│   │   │── /utils          # Helper functions (formatting, validation)
│   │   │── App.js          # Main App component
│   │   └── index.js        # React entry point
│   │── package.json        # Frontend dependencies
│   └── .env                # Frontend environment variables
│
│── /scripts                # Deployment & automation scripts
│── /docs                   # Documentation
│── .gitignore              # Ignore unnecessary files
│── README.md               # Project overview
│── package.json            # Root dependencies (if using workspaces)
└── docker-compose.yml       # Docker for multi-container deployment



Smart Contract deployment:
1.cd blockchain
2.npx hardhat compile
3.npx hardhat run scripts/deploy.js --network sepolia
(storage in pinata : )

