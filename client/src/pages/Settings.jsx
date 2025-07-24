import React from 'react';
import { useSettingsStore } from '../store/setting';

const Settings = () => {
  const {
    name,
    emailAlerts,
    weeklySummary,
    updateName,
    toggleEmailAlerts,
    toggleWeeklySummary,
  } = useSettingsStore();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-neutral-700 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">Settings</h1>

      <div className="space-y-6">
        {/* Profile */}
        <section>
          <h2 className="text-lg font-medium mb-2 dark:text-white">Profile</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-neutral-800 dark:text-white"
          />
          <textarea
            placeholder="Tell us something about yourself..."
            className="w-full mt-3 p-2 border rounded dark:bg-neutral-800 dark:text-white"
            rows={4}
          />
        </section>

        {/* Preferences */}
        <section>
          <h2 className="text-lg font-medium mb-2 dark:text-white">Preferences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 dark:text-white">Language</label>
              <select className="w-full p-2 border rounded dark:bg-neutral-800 dark:text-white">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 dark:text-white">Currency</label>
              <select className="w-full p-2 border rounded dark:bg-neutral-800 dark:text-white">
                <option>USD</option>
                <option>EUR</option>
                <option>NGN</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-lg font-medium mb-2 dark:text-white">Notifications</h2>
          <label className="flex gap-2 dark:text-white">
            <input type="checkbox" checked={emailAlerts} onChange={toggleEmailAlerts} />
            Email Alerts
          </label>
          <label className="flex gap-2 dark:text-white">
            <input type="checkbox" checked={weeklySummary} onChange={toggleWeeklySummary} />
            Weekly Summary
          </label>
        </section>

        {/* Account Security */}
        <section>
          <h2 className="text-lg font-medium mb-2 dark:text-white">Security</h2>
          <button className="text-blue-600 dark:text-blue-400 hover:underline">
            Change Password
          </button>
          <br />
          <button className="text-blue-600 dark:text-blue-400 hover:underline mt-2">
            Manage Connected Devices
          </button>
        </section>

        {/* Danger Zone */}
        <section>
          <h2 className="text-lg font-medium mb-2 text-red-600">Danger Zone</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Delete My Account
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
