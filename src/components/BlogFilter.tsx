import { ChangeEvent, FormEvent, useState } from 'react';
import { ParamKeyValuePair } from 'react-router-dom';

interface BlogFilterProps {
  postQuery: string;
  postLatest: boolean;
  setSearchParams: (params: URLSearchParamsType) => void;
}

type URLSearchParamsType =
  | string
  | ParamKeyValuePair[]
  | Record<string, string | string[]>
  | URLSearchParams;

const BlogFilter = (props: BlogFilterProps): JSX.Element => {
  const { postQuery, postLatest, setSearchParams } = props;

  const [search, setSearch] = useState<string>(() => postQuery);
  const [checked, setChecked] = useState<boolean>(() => postLatest);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      post: { value: string };
      latest: { checked: boolean };
    };

    const query = form.post.value.trim();
    const isChecked = form.latest.checked;
    const params: URLSearchParamsType = {};

    query && setSearchParams(Object.assign(params, { post: query }));
    isChecked && setSearchParams(Object.assign(params, { latest: isChecked }));
    !query && !isChecked && setSearchParams({});
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value);
  const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

  return (
    <form autoComplete='off' onSubmit={submitHandler}>
      <input type='search' name='post' value={search} onChange={changeHandler} />
      <label style={{ padding: '0 10px' }}>
        <input type='checkbox' name='latest' checked={checked} onChange={checkedHandler} />
        New only
      </label>
      <button type='submit'>Search</button>
    </form>
  );
};

export default BlogFilter;
