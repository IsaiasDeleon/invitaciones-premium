import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '@/app/page';
import WeddingPage from '@/app/boda/page';
import XvPage from '@/app/xv/page';
import PresentationPage from '@/app/presentacion/page';
import EsmeraldaPage from '@/app/esmeralda/page';
import '@/app/globals.css';

const path = window.location.pathname.replace(/\/+$/, '');
const Page = path.endsWith('/boda') ? WeddingPage : path.endsWith('/xv') ? XvPage : path.endsWith('/presentacion') ? PresentationPage : path.endsWith('/esmeralda') ? EsmeraldaPage : Home;

createRoot(document.getElementById('root')!).render(<StrictMode><Page /></StrictMode>);
