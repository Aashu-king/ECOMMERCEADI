import {
    Model, Column, Table, PrimaryKey, Default, ForeignKey, BelongsTo, DataType, CreatedAt, UpdatedAt
  } from 'sequelize-typescript';
  import { User } from './user.model';
  
  @Table({
    tableName: 'UserImages',
    timestamps: true,
  })
  export class UserImage extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    imageId!: string;
  
    @Column(DataType.STRING(255))
    imageUrl!: string;
  
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
  
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId!: string;
  
    @BelongsTo(() => User)
    user!: User;
  }
  