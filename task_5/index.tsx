'use client';

import React from 'react';
import { useState } from 'react';
import useSWR from 'swr';

import styles from './page.module.css';

import { fetchOnePost } from '@/libs/fetchOnePost';

const ComponentOne = ({ data }) => (
  <div className={styles.card}>
    <h2>{data.title}</h2>
    <p>{data.body}</p>
    <span>ComponentOne</span>
  </div>
);

const ComponentTwo = ({ data }) => (
  <div className={styles.card}>
    <h2>{data.title}</h2>
    <p>{data.body}</p>
    <span>ComponentTwo</span>
  </div>
);

export default function Home() {
  const { data, error } = useSWR('post', () => fetchOnePost({ delayMS: 0 }));
  const [showComponentTwo, setShowComponentTwo] = useState(false);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>...Loading ComponentOne</div>;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ComponentOne data={data} />

        {showComponentTwo ? (
          <ComponentTwo data={data} />
        ) : (
          <button className={styles.btn} onClick={() => setShowComponentTwo(true)}>
            Show ComponentTwo
          </button>
        )}
      </div>
    </main>
  );
}
