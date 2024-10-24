import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import "@fontsource/roboto/400.css";
import './shared/styles/index.scss'
import { TodoProvider } from './shared/hooks/todoContext.tsx';

createRoot(document.getElementById('root')!).render(
    <TodoProvider>
        <App />
    </TodoProvider>
)
