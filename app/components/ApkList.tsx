'use client';

import { useMemo, useState } from 'react';
import { apkFiles } from '../lib/apkData';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatSize(mb: number) {
  return mb > 1000 ? `${(mb / 1024).toFixed(2)} GB` : `${mb.toFixed(1)} MB`;
}

export default function ApkList() {
  const [query, setQuery] = useState('');

  const filteredFiles = useMemo(() => {
    const normalized = query.toLowerCase();
    return apkFiles.filter((file) =>
      file.name.toLowerCase().includes(normalized) || file.version.toLowerCase().includes(normalized)
    );
  }, [query]);

  const totalSize = filteredFiles.reduce((sum, file) => sum + file.size, 0);

  async function copyName(name: string) {
    await navigator.clipboard.writeText(name);
    alert(`Filename copied: ${name}`);
  }

  return (
    <main className="container">
      <section className="card">
        <div className="header">
          <h1>
            <i className="fas fa-mobile" />
            Minecraft Bedrock APK List
          </h1>
          <p>
            Browse and download older Minecraft Bedrock versions to play on our server.
            This is useful when a player accidentally installs the latest version and can no longer connect.
          </p>
          <div className="search-box">
            <i className="fas fa-search" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search APK files..."
            />
          </div>
        </div>

        <div className="file-list">
          <div className="stats">
            <div>
              <i className="fas fa-file-archive" /> Total: <strong>{filteredFiles.length}</strong> files
            </div>
            <div>
              <i className="fas fa-hard-drive" /> Total size: <strong>{formatSize(totalSize)}</strong>
            </div>
          </div>

          {filteredFiles.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-inbox" />
              <p>No APK files found</p>
            </div>
          ) : (
            filteredFiles.map((file) => (
              <div key={file.name} className="file-item">
                <div className="file-icon">
                  <i className="fas fa-cube" />
                </div>
                <div className="file-info">
                  <div className="file-name">{file.name}</div>
                  <div className="file-meta">
                    <div className="file-meta-item">
                      <i className="fas fa-compact-disc" />
                      <span>{formatSize(file.size)}</span>
                    </div>
                    <div className="file-meta-item">
                      <i className="fas fa-calendar" />
                      <span>{formatDate(file.date)}</span>
                    </div>
                    <div className="file-meta-item">
                      <i className="fas fa-tag" />
                      <span>v{file.version}</span>
                    </div>
                  </div>
                </div>
                <div className="file-actions">
                  <a href={file.downloadUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    <i className="fas fa-download" /> Download
                  </a>
                  <button className="btn" onClick={() => copyName(file.name)}>
                    <i className="fas fa-copy" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
