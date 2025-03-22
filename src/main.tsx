import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { Toaster } from './components/ui/sonner.tsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
      </PersistGate>
   
    <Toaster richColors/>
    </Provider>
  </StrictMode>,
)
