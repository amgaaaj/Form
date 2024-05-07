import { getUsers } from "@/lib/mongo/users";
import { User } from "@/types";
import React from "react";

export default async function UsersPage() {
  const { users }: { users: User[] } = await getUsers();

  return (
    <div>
      {users.map((user: any, index: number) => {
        return (
          <div key={index}>
            {user.username} {user.role}
          </div>
        );
      })}
    </div>
  );
}
