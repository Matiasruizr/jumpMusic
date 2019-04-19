import configService from './config'
// Al no ocupar ruta, webpack sabe que estamos trayendo algo de node modules
import trae from 'trae'

const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default platziMusicService