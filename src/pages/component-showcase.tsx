import type React from "react"
import { useState } from "react"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import Task from "@/components/ui/Task"
import UserCard from "@/components/ui/UserCard"
import ScreenColumnsBackground from "@/components/ui/ScreenColumnsBackground"
import Input from "@/components/ui/Input"
import { ContentCenter } from "@/components/layouts/Sidebard"

import { ArrowRight, UserPlus, Settings } from "lucide-react"

const ComponentShowcase: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value) ? null : "Ingrese un correo electrónico válido"
    }

    const validatePassword = (value: string) => {
        return value.length >= 8 ? null : "La contraseña debe tener al menos 8 caracteres"
    }

    const validatePhone = (value: string) => {
        const phoneRegex = /^$$\d{3}$$ \d{3}-\d{4}$/
        return phoneRegex.test(value) ? null : "Ingrese un número de teléfono válido (123) 456-7890"
    }
    return (
        <ContentCenter>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8">Componentes del CRM</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Badges</h2>
                    <div className="flex flex-wrap gap-4">
                        <h3 className="w-full text-xl font-semibold mt-4">Intents</h3>
                        <Badge text="Primary" intent="primary" />
                        <Badge text="Secondary" intent="secondary" />
                        <Badge text="Success" intent="success" />
                        <Badge text="Warning" intent="warning" />
                        <Badge text="Danger" intent="danger" />

                        <h3 className="w-full text-xl font-semibold mt-4">Sizes</h3>
                        <Badge text="Small" size="sm" />
                        <Badge text="Medium" size="md" />
                        <Badge text="Large" size="lg" />

                        <h3 className="w-full text-xl font-semibold mt-4">Combinations</h3>
                        <Badge text="Small Success" intent="success" size="sm" />
                        <Badge text="Large Warning" intent="warning" size="lg" />
                        <Badge text="Medium Danger" intent="danger" size="md" />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            <Button className="rounded-md" text="Primary" intent="primary" onClick={() => console.log("Primary clicked")} />
                            <Button
                                className="rounded-md" text="Secondary" intent="secondary" onClick={() => console.log("Secondary clicked")} />
                            <Button
                                className="rounded-md" text="Danger" intent="danger" onClick={() => console.log("Danger clicked")} />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                className="rounded-md" text="Small" size="sm" onClick={() => console.log("Small clicked")} />
                            <Button
                                className="rounded-md" text="Medium" onClick={() => console.log("Medium clicked")} />
                            <Button
                                className="rounded-md" text="Large" size="lg" onClick={() => console.log("Large clicked")} />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                className="rounded-md"
                                text="Con icono izquierda"
                                icon={<UserPlus size={16} />}
                                iconPosition="left"
                                onClick={() => console.log("Icon left clicked")}
                            />
                            <Button
                                className="rounded-md"
                                text="Con icono derecha"
                                icon={<ArrowRight size={16} />}
                                iconPosition="right"
                                onClick={() => console.log("Icon right clicked")}
                            />
                            <Button
                                className="rounded-md" text="Cargando" isLoading={true} onClick={() => console.log("This won't log")} />
                        </div>

                        <div>
                            <Button
                                className="rounded-md"
                                text="Botón de ancho completo"
                                fullWidth
                                icon={<Settings size={16} />}
                                onClick={() => console.log("Full width clicked")}
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Task</h2>
                    <div className="flex flex-wrap gap-4">
                        <Task
                            date={new Date(2022, 10, 24)}
                            title="Meeting with partners"
                            onClick={() => console.log("Event clicked")}
                        />
                        <Task
                            date={new Date()}
                            title="Project deadline"
                            isHighlighted={true}
                            onClick={() => console.log("Highlighted event clicked")}
                        />
                        <Task
                            date={new Date(2022, 11, 25)}
                            title="Christmas party"
                            onClick={() => console.log("Future event clicked")}
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">User Card</h2>
                    <div className="flex flex-wrap gap-4">
                        <UserCard
                            firstName="Deanna"
                            lastName="Annis"
                            email="deannannis@gmail.com"
                            avatarUrl="https://randomuser.me/api/portraits/women/1.jpg"
                            onMoreClick={() => console.log("More options clicked")}
                        />
                        <UserCard
                            firstName="John"
                            lastName="Doe"
                            email="johndoe@example.com"
                            avatarUrl="https://randomuser.me/api/portraits/women/1.jpg"
                            onMoreClick={() => console.log("More options clicked for John")}
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Screen Columns Background</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-300 rounded-lg overflow-hidden">
                            <ScreenColumnsBackground mainHeight="h-[200px]" />
                        </div>
                        <div className="border border-gray-300 rounded-lg overflow-hidden">
                            <ScreenColumnsBackground
                                mainHeight="h-[200px]"
                                rightColumnWidth="w-[50%]"
                                rightColumnBgColor="bg-blue-100"
                                leftColumnWidth="w-[120px]"
                                dividerColor="bg-blue-300"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <Input label="Nombre de usuario" placeholder="Ingrese su nombre de usuario" icon="user" />
                        <Input label="Correo electrónico" placeholder="ejemplo@correo.com" icon="mail" type="email" />
                        <Input
                            label="Contraseña"
                            placeholder="Ingrese su contraseña"
                            icon="lock"
                            type={showPassword ? "text" : "password"}
                            rightIcon={showPassword ? "eye-off" : "eye"}
                            onChange={() => { }}
                            onFocus={() => { }}
                            onBlur={() => { }}
                            onIconClick={() => setShowPassword(!showPassword)}
                            onRightIconClick={() => console.log("Abrir menú de opciones")}
                        />
                        <Input label="Fecha" placeholder="DD/MM/YYYY" icon="calendar" type="date" />
                        <Input label="Teléfono" placeholder="(123) 456-7890" icon="phone" type="tel" />
                        <Input label="Monto" placeholder="0.00" icon="dollar" type="number" step="0.01" />
                        <Input label="Porcentaje" placeholder="0%" icon="percent" type="number" min="0" max="100" />
                        <Input label="Búsqueda" placeholder="Buscar..." icon="search" />
                        <Input label="Seleccionar opción" placeholder="Elija una opción" rightIcon="chevron-down" />
                        <Input label="Campo con error" placeholder="Campo con error" error="Este campo es requerido" />
                        <Input
                            label="Campo válido"
                            placeholder="Campo válido"
                            value="Entrada válida"
                            success
                            rightIcon="check"
                            onChange={(e) => console.log("Input changed:", e.target.value)}
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Inputs con Validación</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <Input label="Nombre de usuario" placeholder="Ingrese su nombre de usuario" icon="user" />
                        <Input
                            label="Correo electrónico"
                            placeholder="ejemplo@correo.com"
                            icon="mail"
                            type="email"
                            validate={validateEmail}
                        />
                        <Input
                            label="Contraseña"
                            placeholder="Ingrese su contraseña"
                            icon="lock"
                            type={showPassword ? "text" : "password"}
                            rightIcon={showPassword ? "eye-off" : "eye"}
                            onIconClick={() => setShowPassword(!showPassword)}
                            onRightIconClick={() => setShowPassword(!showPassword)}
                            validate={validatePassword}
                        />
                        <Input label="Teléfono" placeholder="(123) 456-7890" icon="phone" type="tel" validate={validatePhone} />
                        <Input label="Monto" placeholder="0.00" icon="dollar" type="number" step="0.01" />
                        <Input label="Porcentaje" placeholder="0%" icon="percent" type="number" min="0" max="100" />
                        <Input label="Búsqueda" placeholder="Buscar..." icon="search" />
                        <Input label="Seleccionar opción" placeholder="Elija una opción" rightIcon="chevron-down" />
                        <Input label="Campo con error" placeholder="Campo con error" error="Este campo es requerido" />
                        <Input label="Campo válido" placeholder="Campo válido" value="Entrada válida" success rightIcon="check" />
                    </div>
                </section>
            </div>
        </ContentCenter>
    )
}

export default ComponentShowcase

