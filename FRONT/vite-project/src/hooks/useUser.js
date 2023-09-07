import { useEffect, useState } from "react";
import userService from "../services/links-services";

function useUser() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    userService
      .getAll()
      .then(({ data }) => setUser(data))
      .catch(setErrors)
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, errors, setUser };
}

export default useUser;
