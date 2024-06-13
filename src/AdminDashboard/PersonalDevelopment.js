// PersonalDevelopment.js
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MaterialTable from '../common/MaterialTable';

const initialAreas = [
  { id: 1, name: 'Our World' },
  { id: 2, name: 'Keeping/Staying Healthy' },
  { id: 3, name: 'Managing Relationships' },
  { id: 4, name: 'Being Responsible' },
  { id: 5, name: 'Managing Feelings and Emotions' },
  { id: 6, name: 'Computer Safety' },
  { id: 7, name: 'Growing and Changing' },
  { id: 8, name: 'Fire Safety' },
  { id: 9, name: 'First Aid' },
  { id: 10, name: 'A working world' },
  { id: 11, name: 'Keeping/staying safe' },
  { id: 12, name: 'British Values' },
];

const PersonalDevelopment = () => {
  const [areas, setAreas] = useState(initialAreas);
  const [open, setOpen] = useState(false);
  const [fieldName, setFieldName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFieldName('');
  };

  const handleCreate = () => {
    if (fieldName.trim()) {
      setAreas([...areas, { id: areas.length + 1, name: fieldName }]);
    }
    handleClose();
  };

  const handleEdit = (row) => {
    alert(`Edit action not implemented for ${row.name}`);
  };

  const handleDelete = (row) => {
    setAreas(areas.filter((area) => area.id !== row.id));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAreas = areas.filter((area) =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { id: 'name', label: 'Personal Development Area' },
  ];

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <h1 className="text-2xl font-bold mt-2">Personal Development Areas</h1>
        </Grid>
        <Grid item xs={4} style={{ textAlign: 'right' }}>
          <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: '#336699', fontFamily:'Inter' }}>
            + Create
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container justifyContent="flex-end">
              <Grid item xs={2}>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid #ccc',  borderRadius: '4px' }} >
                  <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search.." inputProps={{ 'aria-label': 'search' }} value={searchQuery} onChange={handleSearch} style={{ fontFamily: 'Inter' }}/>
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" style={{ fontFamily: 'Inter' }}>
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
      <MaterialTable columns={columns} rows={filteredAreas} onEdit={handleEdit} onDelete={handleDelete} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Personal Development Areas</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of the Field"
            type="text"
            fullWidth
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} style={{ backgroundColor: '#666' }}> Cancel </Button>
          <Button variant="contained" onClick={handleCreate} style={{ backgroundColor: '#336699' }}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PersonalDevelopment;
