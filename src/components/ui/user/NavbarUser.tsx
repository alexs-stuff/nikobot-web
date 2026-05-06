import { useEffect, useState } from "react";
import { getUser, type NikobotUser } from "../../../lib/api/getuser";
import NavbarButtonReact from "../navbar/NavbarButtonReact";

export default function NavbarUser() {
  const [user, setUser] = useState<NikobotUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser(false)
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
        <div className="rounded-full bg-primary-bg w-9 h-9"/>
    )
  }

  if (!user) {
    return (
      <NavbarButtonReact
        className="flex items-center gap-2 rounded-lg px-4 py-1 hover:bg-primary-bg-hover/50"
        href={`${import.meta.env.PUBLIC_API_URL}/auth/v1/login`}
      >
        Login
      </NavbarButtonReact>
    );
  }

  return (
    <div>
      {user.avatar && (
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          width={36}
          height={36}
          className="rounded-full"
          alt={user.global_name}
        />
      )}

    </div>
  );
}