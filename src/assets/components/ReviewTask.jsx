import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

//Other Libraries
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650
	},
	header: {
		background: 'blue',
		color: 'white'
	}
}));

export default function ReviewTask() {
	const classes = useStyles();
	const taskData = useSelector((state) => state.taskData);
	let reviewTask = [];

	const changeStatus = (id) => {
		console.log(id, 'test');
	};

	if (taskData.length !== 0) {
		for (let i = 0; i < taskData.length; i++) {
			if (taskData[i].status === 'review') {
				reviewTask.push(taskData[i]);
			}
		}
	}

	console.log(reviewTask);

	return (
		<Fragment>
			<Typography variant="h5" style={{ textAlign: 'center', marginBottom: '3%' }}>
				Tugas yang harus direview
			</Typography>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.header}>Nama Karyawan</TableCell>
							<TableCell className={classes.header} align="right">
								Nama Project
							</TableCell>
							<TableCell className={classes.header} align="right">
								Detail Pekerjaan
							</TableCell>
							<TableCell className={classes.header} align="right">
								Status
							</TableCell>
							<TableCell className={classes.header} align="right">
								Ubah Status
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reviewTask.length !== 0 ? (
							reviewTask.map((row) => (
								<TableRow key={row._id}>
									<TableCell component="th" scope="row">
										{row.userId.fullname}
									</TableCell>
									<TableCell align="right">{row.projectName}</TableCell>
									<TableCell align="right">{row.taskDetails}</TableCell>
									<TableCell align="right">{row.status}</TableCell>
									<TableCell align="right">
										<Button size="small" onClick={() => changeStatus(row._id)}>
											Ubah Status
										</Button>
									</TableCell>
								</TableRow>
							))
						) : (
							'Belum ada tugas untuk direview'
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
}
