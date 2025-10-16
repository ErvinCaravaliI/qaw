import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LocationPermission from './components/LocationPermission'
import BluetoothPermission from './components/BluetoothPermission'
import NotificationPermission from './components/NotificationPermission'
import BluetoothSetup from './components/BluetoothSetup'
import BatteryOptimization from './components/BatteryOptimization'
import ChatScreen from './components/ChatScreen'
import CommandsHelp from './components/CommandsHelp'
import LocationChannels from './components/LocationChannels'
import NetworkPeople from './components/NetworkPeople'
import Toast from './components/Toast'
import { useToast } from './hooks/useToast'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showCommands, setShowCommands] = useState(false)
  const [showChannels, setShowChannels] = useState(false)
  const [showNetwork, setShowNetwork] = useState(false)
  const { toasts, showToast, hideToast } = useToast()

  const steps = [
    { component: WelcomeScreen, name: 'welcome' },
    { component: LocationPermission, name: 'location' },
    { component: BluetoothPermission, name: 'bluetooth' },
    { component: NotificationPermission, name: 'notification' },
    { component: BluetoothSetup, name: 'setup' },
    { component: BatteryOptimization, name: 'battery' },
    { component: ChatScreen, name: 'chat' }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const CurrentComponent = steps[currentStep].component

  return (
    <div className="app">
      <div className="app-shell">
        <header className="app-header">
          <button className="back-btn" onClick={handlePrev} disabled={currentStep === 0}>
            ← Atrás
          </button>
          <div className="step-indicator">Paso {currentStep + 1} / {steps.length}</div>
        </header>

        <main className="app-main">
          <CurrentComponent
            onNext={handleNext}
            onPrev={handlePrev}
            onOpenCommands={() => setShowCommands(true)}
            onOpenChannels={() => setShowChannels(true)}
            onOpenNetwork={() => setShowNetwork(true)}
            showToast={showToast}
          />
        </main>
      </div>

      {showCommands && <CommandsHelp onClose={() => setShowCommands(false)} />}
      {showChannels && <LocationChannels onClose={() => setShowChannels(false)} showToast={showToast} />}
      {showNetwork && <NetworkPeople onClose={() => setShowNetwork(false)} showToast={showToast} />}

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => hideToast(toast.id)}
        />
      ))}
    </div>
  )
}

export default App
