'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { FaCode, FaEnvelope, FaRobot, FaCheck } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import Confetti from 'react-confetti';
import { useRouter } from 'next/navigation';

export default function Integration() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState('pending');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  const dummySnippet = `<script>
  window.BEYOND_CHATBOT_ID = "your-unique-id";
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://cdn.beyondchats.com/widget.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'beyond-chatbot'));
</script>`;

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(dummySnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const handleTestIntegration = () => {
    // Simulate integration check
    setTimeout(() => {
      setIntegrationStatus('success');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {showConfetti && <Confetti />}
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Chatbot Integration
            </h3>
            
            {/* Top Bar for Feedback */}
            {!showFeedbackForm && (
              <div className="bg-blue-50 p-4 rounded-md mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaRobot className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3 flex justify-between w-full">
                    <p className="text-sm text-blue-700">
                      Chatbot not working as intended?
                    </p>
                    <button
                      onClick={() => setShowFeedbackForm(true)}
                      className="text-sm font-medium text-blue-700 hover:text-blue-600"
                    >
                      Share feedback
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Feedback Form */}
            {showFeedbackForm && (
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-900">
                  Share Your Feedback
                </h4>
                <textarea
                  className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows={4}
                  placeholder="Describe the issue you're experiencing..."
                />
                <div className="mt-4 flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowFeedbackForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setShowFeedbackForm(false)}>
                    Submit Feedback
                  </Button>
                </div>
              </div>
            )}

            {/* Integration Options */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Code Integration */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center">
                  <FaCode className="h-6 w-6 text-indigo-500" />
                  <h4 className="ml-3 text-lg font-medium text-gray-900">
                    Add to Your Website
                  </h4>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Copy and paste this code snippet into your website's &lt;head&gt; section
                </p>
                <div className="mt-4">
                  <pre className="bg-gray-50 p-4 rounded-md text-sm overflow-x-auto">
                    {dummySnippet}
                  </pre>
                  <Button
                    variant="outline"
                    className="mt-4 w-full flex items-center justify-center"
                    onClick={handleCopyCode}
                  >
                    {isCopied ? (
                      <>
                        <FaCheck className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      'Copy Code'
                    )}
                  </Button>
                </div>
              </div>

              {/* Email Instructions */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center">
                  <FaEnvelope className="h-6 w-6 text-indigo-500" />
                  <h4 className="ml-3 text-lg font-medium text-gray-900">
                    Email Instructions
                  </h4>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Send integration instructions to your development team
                </p>
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Developer's email"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <Button className="mt-4 w-full">
                    Send Instructions
                  </Button>
                </div>
              </div>
            </div>

            {/* Test Integration */}
            <div className="mt-8">
              <Button
                onClick={handleTestIntegration}
                className="w-full"
                disabled={integrationStatus === 'checking'}
              >
                {integrationStatus === 'checking'
                  ? 'Checking Integration...'
                  : 'Test Integration'}
              </Button>
            </div>

            {/* Success State */}
            {integrationStatus === 'success' && (
              <div className="mt-8 text-center">
                <h4 className="text-lg font-medium text-green-600">
                  Integration Successful! 🎉
                </h4>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Button 
                    variant="outline"
                    onClick={() => router.push('/dashboard/admin')}
                  >
                    Explore Admin Panel
                  </Button>
                  <Button
                    onClick={() => router.push('/dashboard/chat')}
                  >
                    Start Talking to Your Chatbot
                  </Button>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-2">Share your success</p>
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href), '_blank')}
                    >
                      <FiShare2 className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('Just set up my AI chatbot with @BeyondChats! 🤖✨ Check it out at: ' + window.location.href), '_blank')}
                    >
                      <FiShare2 className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 