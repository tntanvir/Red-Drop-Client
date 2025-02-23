import { ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { List } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Sideber = ({ data, show, value, serchFill }) => {


    return (
        <Card className="max-h-screen hide-scrollbar w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
            {
                show &&
                <input type="text" value={value} onChange={(e) => serchFill(e)} className='border' placeholder='location' />
            }

            <List>
                {
                    data?.map((e, i) => (

                        <Link key={i} to={`${e.path}`}>

                            <ListItem>
                                <ListItemPrefix>
                                </ListItemPrefix>
                                {e.name}
                            </ListItem>
                        </Link>

                    ))
                }



            </List>
        </Card>
    );
};

export default Sideber;