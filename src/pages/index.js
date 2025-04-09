import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';


export default function Home() {
  return (
    <Layout title="RapidUIX" description="Open-source UI components">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">RapidUIX</h1>
          <p className="hero__subtitle">Cross-platform UI components for React Native & Flutter</p>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/react-native">
              Explore Docs
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="card-grid">
          <Link to="/docs/react-native/native_accordion" className="card">
            <h3>React Native Button →</h3>
            <p>Stylish and accessible button component.</p>
          </Link>
          <Link to="/docs/flutter/flutter_accordion" className="card">
            <h3>Flutter Button →</h3>
            <p>Fast and flexible button widget for Flutter apps.</p>
          </Link>
          <Link to="https://github.com/rapiduix/rapiduix-react-native" className="card" target="_blank">
            <h3>GitHub (React Native) →</h3>
            <p>View components and contribute on GitHub.</p>
          </Link>
          <Link to="https://github.com/rapiduix/rapiduix-flutter" className="card" target="_blank">
            <h3>GitHub (Flutter) →</h3>
            <p>Contribute or browse Flutter widgets repo.</p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
