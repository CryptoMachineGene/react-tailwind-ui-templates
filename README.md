# react-tailwind-ui-templates

![Status](https://img.shields.io/badge/Status-In%20Progress-orange.svg)

Reusable JSX components styled with Tailwind CSS — designed to speed up frontend development, especially for Web3, dashboard, and dApp interfaces.

This repo serves as a personal library of lightweight, composable UI building blocks.

## 📁 Structure

components/  
├── DashboardCard.jsx        # Reusable card block with title, subtitle, content  
├── WalletConnectButton.jsx  # (Planned) Wallet connect trigger w/ styling  
├── ENSDisplay.jsx           # (Planned) ENS name/avatar display block  
snippets/  
├── dashboard_card.sublime-snippet  # Sublime snippet version of DashboardCard  

## 🚀 Usage

### 🧱 Example: `DashboardCard`

```jsx
import DashboardCard from './components/DashboardCard';

<DashboardCard
  title="Wallet Overview"
  subtitle="Connected to 0x123...Abc"
>
  <p className="text-green-400">Balance: 3.42 ETH</p>
</DashboardCard>
```
