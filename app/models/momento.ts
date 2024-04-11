import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Momento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  title: string | undefined

  @column()
  description: string | undefined

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}