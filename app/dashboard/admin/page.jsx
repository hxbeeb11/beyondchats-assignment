'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { FaCog, FaRobot, FaChartLine, FaDatabase } from 'react-icons/fa';

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const stats = [
    { name: 'Total Conversations', value: '2,345', change: '+12%', changeType: 'increase' },
    { name: 'Avg. Response Time', value: '1.2s', change: '-0.3s', changeType: 'decrease' },
    { name: 'Satisfaction Rate', value: '94%', change: '+2%', changeType: 'increase' },
    { name: 'Active Users', value: '156', change: '+23', changeType: 'increase' },
  ];

  const trainingData = [
    { url: '/about', status: 'Trained', lastUpdated: '2 hours ago' },
    { url: '/pricing', status: 'Training', lastUpdated: 'In progress' },
    { url: '/contact', status: 'Trained', lastUpdated: '1 day ago' },
    { url: '/features', status: 'Pending', lastUpdated: 'Not started' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="outline" size="sm">
                <FaCog className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </dd>
                <dd className={`mt-2 text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </dd>
              </div>
            </div>
          ))}
        </div>

        {/* Training Data */}
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Training Data
              </h3>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Page URL
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Updated
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {trainingData.map((item, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {item.url}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    item.status === 'Trained' ? 'bg-green-100 text-green-800' :
                                    item.status === 'Training' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {item.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.lastUpdated}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    disabled={item.status === 'Training'}
                                  >
                                    Retrain
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Quick Actions
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Button className="flex items-center justify-center">
                  <FaRobot className="h-5 w-5 mr-2" />
                  Train New Data
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <FaChartLine className="h-5 w-5 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <FaDatabase className="h-5 w-5 mr-2" />
                  Manage Knowledge Base
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 