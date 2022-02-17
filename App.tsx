import Home from './src/pages/Home';
import { SubscriptionProvider } from './src/contexts/Subscription';

export default function App() {
  return (
    <SubscriptionProvider>
      <Home />
    </SubscriptionProvider>
  )
}
