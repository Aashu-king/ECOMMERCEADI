import {
    Model, Column, Table, PrimaryKey, Default, ForeignKey, BelongsTo, HasMany, DataType, CreatedAt, UpdatedAt
  } from 'sequelize-typescript';
  import { Role } from './role.model';
  import { UserImage } from './userimages.model';
  
  @Table({
    tableName: 'Users',
    timestamps: true,
  })
  export class User extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    userId!: string;
  
    @Column(DataType.STRING(100))
    firstName!: string;
  
    @Column(DataType.STRING(100))
    lastName!: string;
  
    @Column(DataType.STRING(255))
    email!: string;
  
    @Column(DataType.STRING(255))
    password!: string;
  
    @Column(DataType.STRING(15))
    phoneNumber!: string;
  
    @Column(DataType.JSONB)
    shippingAddress!: object;
  
    @Column(DataType.JSONB)
    billingAddress!: object;
  
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
  
    @Column({
      type: DataType.ENUM('Active', 'Inactive', 'Suspended'),
      defaultValue: 'Active',
    })
    status!: string;
  
    @ForeignKey(() => Role)
    @Column(DataType.UUID)
    roleId!: string;
  
    @BelongsTo(() => Role)
    role!: Role;
  
    @HasMany(() => UserImage)
    images!: UserImage[];
  }
  