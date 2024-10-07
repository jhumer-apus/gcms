import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';

export default function Search() {
    return (
        <div>
            <OutlinedInput  
                endAdornment={
                    <SearchIcon className='cursor-pointer'/>
                }
            />
        </div>
    )
}