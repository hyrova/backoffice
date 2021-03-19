import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Card,
} from "@material-ui/core";
import AppTextField from "../../../common/Form/TextField";
import useFetch from "use-http";
import { useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";
import React, { useCallback, useEffect, useState } from "react";
import { User } from "../../../../../typescript/interfaces";
import { MoreVert } from "@material-ui/icons";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  list: {
    marginTop: theme.spacing(4),
  },
  pagination: {
    marginTop: theme.spacing(4),
  },
}));

export default function UserList() {
  const router = useRouter();
  const classes = useStyles();
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [search, setSearch] = useState("");

  const { get, loading, response } = useFetch();

  const fetchUsers = async (page: number, search: string) => {
    const data = await get(
      `/admin/users?page=${page}&search=${search}&amountPerPage=15`
    );

    if (response.ok) {
      setMaxPage(Math.ceil(data.meta.total / 10));
      setData(data.data);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchUsers(1, search);
  }, [search]);

  const handleClick = (id) => {
    router.push(`/users/${id}`);
  };

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    fetchUsers(value, search);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounceSetSearch(event.target.value);
  };

  const debounceSetSearch = useCallback(_.debounce(setSearch, 250), []);

  return (
    <>
      <AppTextField label="Recherche" onChange={handleSearch} />

      <TableContainer component={Paper} className={classes.list}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.name}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => handleClick(user.id)}
                  >
                    Editer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={maxPage}
        siblingCount={0}
        page={page}
        onChange={handlePage}
        className={classes.pagination}
      />
    </>
  );
}
