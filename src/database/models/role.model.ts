import {
    Model, Column, Table, PrimaryKey, Default, HasMany, DataType, CreatedAt, UpdatedAt
  } from 'sequelize-typescript';
  import { User } from './user.model';
  
  @Table({
    tableName: 'Roles',
    timestamps: true,
  })
  export class Role extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    roleId!: string;
  
    @Column(DataType.STRING(50))
    roleName!: string;
  
    @HasMany(() => User)
    users!: User[];
  
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
  }
  

