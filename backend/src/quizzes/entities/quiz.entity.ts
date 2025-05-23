import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { QuizQuestion } from './quiz-question.entity';
import { QuizAttempt } from './quiz-attempt.entity';


@Entity()
export class Quiz {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lessonId: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    type: string;

    @Column()
    difficulty: string;

    @Column()
    status: string;

    @Column()
    totalQuestions: number;

    @Column()
    passingScore: number;

    @Column()
    timeLimit: number;

    @Column()
    maxAttempts: number;

    @OneToMany(() => QuizQuestion, (quizQuestion) => quizQuestion.quiz)
    questions: QuizQuestion[];

    @OneToMany(() => QuizAttempt, (quizAttempt) => quizAttempt.quiz)
    attempts: QuizAttempt[];
}