'use client';

import { useState } from 'react';
import Input from '@/components/input';
import Chip from '@/components/chip';
import { USERS } from '@/constants/data';

export default function Home() {
  const [users, setUsers] = useState<User[]>(USERS);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
    setInput('');
    const updatedUsers = users.filter(
      (currUser) => user.email !== currUser.email
    );
    setUsers(updatedUsers);
  };

  const handleCancel = (user: User) => {
    setSelectedUsers(
      selectedUsers.filter((username) => username.name !== user.name)
    );
    setUsers([...users, user]);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(input.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8">Pick Users</h1>
      <div className="relative w-full lg:w-1/2 flex items-center gap-2 border-b-2 flex-wrap">
        {selectedUsers.length > 0 &&
          selectedUsers?.map((user) => (
            <Chip
              name={user.name}
              key={user.email}
              handleCancel={() => handleCancel(user)}
            />
          ))}
        <div className="relative flex flex-col">
          <Input
            type="text"
            placeholder="Add new user"
            value={input}
            onChange={handleChange}
          />

          {filteredUsers.length > 0 && (
            <div className="absolute top-12 w-max bg-gray-100 p-1 rounded-lg shadow-lg flex flex-col max-h-[200px] overflow-y-scroll">
              {filteredUsers.map((user) => (
                <div
                  key={user.email}
                  className="flex items-center gap-4 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md"
                  onClick={() => handleClick(user)}
                >
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
