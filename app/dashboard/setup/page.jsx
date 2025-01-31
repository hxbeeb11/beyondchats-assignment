'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { isValidUrl } from '@/app/lib/utils';

export default function SetupOrganization() {
  const [scrapingStatus, setScrapingStatus] = useState('idle');
  const [webPages, setWebPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const websiteUrl = formData.get('websiteUrl');

    if (!isValidUrl(websiteUrl)) {
      alert('Please enter a valid URL');
      return;
    }

    setScrapingStatus('scraping');
    // Simulate website scraping
    setTimeout(() => {
      setWebPages([
        { url: '/', status: 'scraped', data: 'Homepage content...' },
        { url: '/about', status: 'scraped', data: 'About page content...' },
        { url: '/contact', status: 'pending', data: null },
      ]);
      setScrapingStatus('completed');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Setup Your Organization
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Provide your organization details and website URL to get started.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-5 space-y-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="websiteUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  id="websiteUrl"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Description (optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  disabled={scrapingStatus === 'scraping'}
                  className="w-full"
                >
                  {scrapingStatus === 'scraping'
                    ? 'Scanning Website...'
                    : 'Start Website Scan'}
                </Button>
              </div>
            </form>

            {webPages.length > 0 && (
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Detected Pages
                </h4>
                <div className="space-y-4">
                  {webPages.map((page) => (
                    <div
                      key={page.url}
                      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => setSelectedPage(page)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          {page.url}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            page.status === 'scraped'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {page.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedPage && (
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Page Content Preview
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {selectedPage.data || 'Content not available yet'}
                  </pre>
                </div>
              </div>
            )}

            {scrapingStatus === 'completed' && (
              <div className="mt-8">
                <Button
                  onClick={() => window.location.href = '/dashboard/integration'}
                  className="w-full"
                >
                  Proceed to Chatbot Integration
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 