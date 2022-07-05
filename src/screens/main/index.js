import React from 'react'
import {
  Grid, Stack, Table, TableRow, TableContainer, TableCell, TableHead, TableBody,
  TablePagination, Checkbox, Divider, Button, FormControlLabel
} from '@mui/material'

const MainScreen = (props) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ minHeight: '60vh' }}>
          <Stack>
            <TableContainer
              sx={{ overflow: 'scroll', maxWidth: '200vw' }}
            >
              <Table
                aria-labelledby="tableTitle"
                size={'small'}
              >
                <TableHead>
                  <TableCell><b>#</b></TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell><b>Limit</b></TableCell>
                  <TableCell><b>Active</b></TableCell>
                  <TableCell><b>Hotmail</b></TableCell>
                  <TableCell><b>Type</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                  <TableCell><b>Process</b></TableCell>
                  <TableCell><b>ChiTieu</b></TableCell>
                  <TableCell><b>Page</b></TableCell>
                  <TableCell><b>Groups</b></TableCell>
                  <TableCell><b>BM</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell><b>CreateTime</b></TableCell>
                  <TableCell><b>Birthday</b></TableCell>
                  <TableCell><b>Friend</b></TableCell>
                  <TableCell><b>Token</b></TableCell>
                  <TableCell><b>Note</b></TableCell>
                  <TableCell><b>Dating</b></TableCell>
                  <TableCell><b>Country</b></TableCell>
                  <TableCell><b>Timestamp</b></TableCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ minHeight: '1vh' }}>
          <Divider>
            <Button variant='contained' size='small'>Load file log</Button>
          </Divider>
        </Grid>
        <Grid item xs={12} sx={{ minHeight: '39vh', fontSize: 11 }}>
          <Grid container spacing={1} sx={{ overflow: 'scroll', maxWidth: '200vw' }}>
            <Grid item xs={4}>
              <Stack sx={{ marginLeft: 2 }} spacing={1}>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      label={'Load ảnh images'}
                      control={<Checkbox />}
                      labelPlacement='start'
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Ẩn Chrome'}
                      control={<Checkbox />}
                      labelPlacement='start'
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Tạo Profile'}
                      labelPlacement='start'
                      control={<Checkbox />}
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Chống kẹt Chrome'}
                      control={<Checkbox />}
                      labelPlacement='start'
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      label={'Number threads'}
                      control={<input type={'number'} style={{ marginLeft: 8, width: 30 }} />}
                      labelPlacement='start'
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Số Acc/IP'}
                      control={<input type={'number'} style={{ marginLeft: 8, width: 30 }} />}
                      labelPlacement='start'
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      label={'Delay time code'}
                      control={<input type={'number'} style={{ marginLeft: 8, width: 30 }} />}
                      labelPlacement='start'
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Size Web'}
                      control={<input type={'text'} style={{ marginLeft: 8, width: 30 }} />}
                      labelPlacement='start'
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      label={'Delay giữa các luồng(10=1s)'}
                      control={<input type={'number'} style={{ marginLeft: 8, width: 30 }} />}
                      labelPlacement='start'
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Tự động xoá ChromeDriver trong task'}
                      control={<input type={'checkbox'} />}
                      labelPlacement='start'
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      label={'Get lại ip TinSoft, TM < 120s'}
                      control={<input type={'number'} style={{ marginLeft: 8, width: 30 }} />}
                      labelPlacement='start'
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label={'Sau số Nick'}
                      control={<input type={'number'} style={{ marginLeft: 8, width: 30 }}/>}
                      labelPlacement='start'
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainScreen