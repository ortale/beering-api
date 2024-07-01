import { Entity, Unique, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity("beers")
@Unique(["name"])
export class Beer {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column({
		length: 100,
		nullable: true
	})
	public name: string;

	@Column({
		length: 100
	})
	public description: string;

	@Column({
		name: "image_url"
	})
	public imageUrl: string;

	@UpdateDateColumn({ name: "created_at" })
	public createdAt?: Date;

	@UpdateDateColumn({ name: "modified_at" })
	public modifiedAt?: Date;
}
